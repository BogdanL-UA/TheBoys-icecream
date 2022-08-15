(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-first]");
  const mobileMenuRef = document.querySelector("[data-menu-first]");
  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-sec]");
  const mobileMenuRef = document.querySelector("[data-menu-sec]");
  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-third]");
  const mobileMenuRef = document.querySelector("[data-menu-third]");
  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();