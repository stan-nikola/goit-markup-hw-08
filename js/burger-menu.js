
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileLogoRef = document.querySelector("[data-logo]");
  const mobileHeaderRef = document.querySelector("[data-body]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileLogoRef.classList.toggle("logo--hidden");
    mobileHeaderRef.classList.toggle("no-scroll");

    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
		if (!e.matches) return;
      mobileMenuRef.classList.remove('is-open');
      mobileHeaderRef.classList.remove("no-scroll");
      mobileLogoRef.classList.remove("logo--hidden");
      
		menuBtnRef.setAttribute('aria-expanded', false);
	
	});

    
  });
})();