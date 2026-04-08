(function () {
  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");
  var yearEl = document.getElementById("year");
  var mqDesktop = window.matchMedia("(min-width: 768px)");

  function setNavOpen(open) {
    if (!toggle || !menu) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("nav-open", open && !mqDesktop.matches);
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setNavOpen(!menu.classList.contains("is-open"));
    });

    menu.querySelectorAll("a[href^='#']").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!mqDesktop.matches) {
          setNavOpen(false);
        }
      });
    });

    mqDesktop.addEventListener("change", function (e) {
      if (e.matches) {
        document.body.classList.remove("nav-open");
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }
})();
