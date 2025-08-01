window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".all-content");

    if (preloader && content) {
      setTimeout(() => {
        preloader.classList.add("hidden");
        content.classList.remove("blur");
      }, 1000);

        preloader.addEventListener("transitionend", () => {
        preloader.remove();
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".all-content");
    if (content) content.classList.add("blur");
  });