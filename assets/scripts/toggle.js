const docEl = document.documentElement;
const body = document.querySelector('body');

body.addEventListener('click', (event) => {
  const tab = event.target.closest('.tab');
  if (tab) {
    const tabKey = tab.dataset.tab;
    tab.parentElement.dataset.tab = tabKey;
    return;
  }

  const toggle = event.target.closest('.section__toggle');
  if (toggle) {
    toggle.classList.toggle('active');
  }

  const slideButton = event.target.closest('.slider-button');
  if (slideButton) {
    const box = slideButton.parentElement;
    const direction = slideButton.dataset.slide;
    const nextOffset = (parseInt(box.dataset.offset, 10) + parseInt(direction, 10) + 3) % 3;
    box.dataset.offset = nextOffset;
  }
});
