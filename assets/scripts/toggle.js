const docEl = document.documentElement;
const body = document.querySelector('body');

body.addEventListener('click', (event) => {
  const modalButton = event.target.closest('.modal-button, .modal__close');
  if (modalButton) {
    body.classList.toggle('with-modal');
    return;
  }

  const tab = event.target.closest('.tab');
  if (tab) {
    const tabKey = tab.dataset.tab;
    tab.parentElement.dataset.tab = tabKey;
    return;
  }

  const toggle = event.target.closest('.toggle');
  if (toggle) {
    toggle.classList.toggle('active');
    return;
  }

  const slideButton = event.target.closest('.slider-button');
  if (slideButton) {
    const box = slideButton.parentElement;
    const direction = slideButton.dataset.slide;
    const nextOffset = (parseInt(box.dataset.offset, 10) + parseInt(direction, 10) + 3) % 3;
    box.dataset.offset = nextOffset;
  }
});
