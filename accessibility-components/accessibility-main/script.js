const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModalBtn");
const modalElement = document.getElementById("accessibleModal");

openModalButton.addEventListener("click", () => {
  modalElement.classList.add("open");
  closeModalButton.focus();
});

closeModalButton.addEventListener("click", () => {
  modalElement.classList.remove("open");
  openModalButton.focus();
});

const openDialogButton = document.getElementById("openDialog");
const closeDialogButton = document.getElementById("closeDialogBtn");
const dialogElement = document.getElementById("accessibleDialog");

openDialogButton.addEventListener("click", () => {
  dialogElement.showModal();
  closeDialogButton.focus();
});

closeDialogButton.addEventListener("click", () => {
  dialogElement.close();
  openDialogButton.focus();
});

const navButton = document.getElementById("navButton");
const navContent = document.getElementById("navContent");
const closeNavButton = document.getElementById("closeNavBtn");

navButton.addEventListener("click", () => {
  if (navContent.classList.contains("open")) {
    navContent.classList.remove("open");
    navButton.setAttribute("aria-expanded", "false");
  } else {
    navContent.classList.add("open");
    navButton.setAttribute("aria-expanded", "true");

    const firstListItem = navContent.querySelector("ul li:first-child");
    if (firstListItem) {
      firstListItem.querySelector("a").focus();
    }
  }

  closeNavButton.addEventListener("click", () => {
    const navContent = document.getElementById("navContent");
    const navButton = document.getElementById("navButton");

    if (navContent.classList.contains("open")) {
      navContent.classList.remove("open");
      navButton.setAttribute("aria-expanded", "false");
    }
  });
});
