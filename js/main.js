(function () {
  "use strict";

  // --- Navigation: Active section highlighting ---

  function initSectionObserver() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link[href^='#']");

    if (sections.length === 0 || navLinks.length === 0) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");

            navLinks.forEach(function (link) {
              link.classList.remove("active");
              if (link.getAttribute("href") === "#" + id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Mobile hamburger menu ---

  function initMobileMenu() {
    var menuToggle = document.querySelector(".mobile-menu-toggle");
    var navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) {
      return;
    }

    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", function (e) {
      var link = e.target.closest(".nav-link");
      if (link) {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", function (e) {
      if (!navMenu.classList.contains("open")) {
        return;
      }

      var nav = document.querySelector(".main-nav");
      if (nav && !nav.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Career Accordions ---

  function initAccordions() {
    var accordionContainer = document.querySelector(".career-section");
    if (!accordionContainer) {
      return;
    }

    var accordionHeaders = accordionContainer.querySelectorAll(
      ".accordion-header"
    );

    if (accordionHeaders.length === 0) {
      return;
    }

    accordionHeaders.forEach(function (header, index) {
      var content = header.nextElementSibling;
      if (!content || !content.classList.contains("accordion-content")) {
        return;
      }

      if (index <= 1) {
        header.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        header.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0";
      }

      header.addEventListener("click", function () {
        toggleAccordion(header, content);
      });

      header.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleAccordion(header, content);
        }
      });
    });
  }

  function toggleAccordion(header, content) {
    var isOpen = header.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      header.setAttribute("aria-expanded", "false");
      content.style.maxHeight = "0";
    } else {
      header.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  // --- Scroll to top on logo click ---

  function initLogoClick() {
    var logo = document.querySelector(".nav__logo");
    if (!logo) {
      return;
    }

    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    logo.style.cursor = "pointer";
  }

  // --- Scrolled nav shadow ---

  function initNavScroll() {
    var nav = document.querySelector(".main-nav");
    if (!nav) {
      return;
    }

    var scrollThreshold = 10;
    var ticking = false;

    function updateNavState() {
      if (window.scrollY > scrollThreshold) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNavState);
        ticking = true;
      }
    });

    updateNavState();
  }

  // --- Recalculate accordion heights on language change ---

  function initLanguageChangeHandler() {
    document.addEventListener("languageChanged", function () {
      var openHeaders = document.querySelectorAll(
        '.accordion-header[aria-expanded="true"]'
      );

      openHeaders.forEach(function (header) {
        var content = header.nextElementSibling;
        if (content && content.classList.contains("accordion-content")) {
          content.style.maxHeight = "none";
          requestAnimationFrame(function () {
            content.style.maxHeight = content.scrollHeight + "px";
          });
        }
      });
    });
  }

  // --- Scroll reveal animations ---

  function initRevealObserver() {
    var revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length === 0) {
      return;
    }

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // --- Back to top button ---

  function initBackToTop() {
    var btn = document.getElementById("back-to-top");
    if (!btn) {
      return;
    }

    var scrollThreshold = 300;
    var ticking = false;

    function updateButton() {
      if (window.scrollY > scrollThreshold) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateButton);
        ticking = true;
      }
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    updateButton();
  }

  // --- Print button (replaces inline onclick) ---

  function initPrintButton() {
    var btn = document.getElementById("print-btn");
    if (!btn) {
      return;
    }
    btn.addEventListener("click", function () {
      window.print();
    });
  }

  // --- Initialization ---

  function init() {
    initSectionObserver();
    initMobileMenu();
    initAccordions();
    initLogoClick();
    initNavScroll();
    initLanguageChangeHandler();
    initRevealObserver();
    initBackToTop();
    initPrintButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
