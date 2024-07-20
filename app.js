const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  } else {
    throw Error(
      `the element ${selector} you are trying to access does not exist.`
    );
  }
};

const modalBtn = getElement(".modal-btn");
const modalOverlay = getElement(".modal-overlay");
const closeBtn = getElement(".close-btn");

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.toggle("show-modal");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.toggle("show-modal");
});
