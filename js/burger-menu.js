
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileLogoRef = document.querySelector("[data-logo]");
  const mobileHeaderRef = document.querySelector("[data-header");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileLogoRef.classList.toggle("logo--hidden");
    mobileHeaderRef.classList.toggle("header__item--fixed");
  });
})();