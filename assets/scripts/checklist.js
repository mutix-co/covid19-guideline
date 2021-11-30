const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  let step = '';
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = sections[i];

    if (el.getBoundingClientRect().top <= 20) {
      step = el.dataset.order;
      break;
    }
  }
  body.dataset.step = step;
});
