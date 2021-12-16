const docEl = document.documentElement;
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');



function getTop(elem) {
  const box = elem.getBoundingClientRect();
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;
  const top  = box.top +  scrollTop - clientTop;
  return Math.round(top)
}

let list = [];
function updateList() {
  sections.forEach((el, i) => {
    list[i] = { step: el.dataset.order, top: getTop(el) };
  });
}

updateList();
window.addEventListener('resize', () => {
  updateList();
  updateStep();
});

window.addEventListener('scroll', updateStep);



function updateStep() {
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

  let nextStep = '';
  for (let i = list.length - 1; i >= 0; i--) {
    const { step, top } = list[i];

    if (top <= scrollTop + 80) {
      nextStep = step;
      break;
    }
  }
  body.dataset.step = nextStep;
}
