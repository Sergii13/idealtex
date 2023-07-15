// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

import {
  bodyLock,
  bodyUnlock,
  menuClose,
  menuOpen,
  removeClasses,
} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const phoneBtn = document.querySelector("[data-phone]");
  if (phoneBtn) {
    phoneBtn.addEventListener("click", (e) => {
      e.preventDefault();
      phoneBtn.parentElement.classList.toggle("_active-phone");
    });
  }

  const closeBanner = document.querySelector("[data-close-banner]");
  if (closeBanner) {
    closeBanner.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.closest(".top-header").classList.add("close");
    });
  }

  const openMenuBtn = document.querySelector("[data-open-menu]");
  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      menuOpen();
    });
  }

  const closeMenuBtn = document.querySelector("[data-close-menu]");
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      menuClose();
    });
  }

  const overlay = document.querySelector(".header__overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      e.preventDefault();
      menuClose();
    });
  }
  const btnCatalog = document.querySelector(".main-header__catalog-button");
  if (btnCatalog) {
    btnCatalog.addEventListener("click", (e) => {
      e.preventDefault();
      document.documentElement.classList.contains("open-catalog")
        ? bodyUnlock()
        : bodyLock();
      document.documentElement.classList.toggle("open-catalog");
    });
  }
  const btnCloseSearch = document.querySelector(".search-header__close");
  if (btnCloseSearch) {
    btnCloseSearch.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("open-search");
    });
  }
  const btnOpenSearch = document.querySelector(".main-header__search-open");
  if (btnOpenSearch) {
    btnOpenSearch.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("open-search");
    });
  }

  const closeCatalog = document.querySelector(
    ".header-catalog__close.button-icon"
  );
  if (closeCatalog) {
    closeCatalog.addEventListener("click", (e) => {
      document.documentElement.classList.remove("open-catalog");
      bodyUnlock();
    });
  }

  const mobNav = document.querySelector(".catalog-mob__nav");
  if (mobNav) {
    const allClose = document.querySelectorAll(".header-catalog__back");
    if (allClose) {
      allClose.forEach((item) =>
        item.addEventListener("click", (e) => {
          e.target.closest(".header-catalog").classList.remove("open-category");
          removeClasses(allBlocks, "active");
        })
      );
    }
    const allBlocks = document.querySelectorAll(
      ".header-catalog__content .header-catalog__body"
    );
    const allBtn = mobNav.querySelectorAll(".category-card");
    allBtn.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.target.closest(".header-catalog").classList.add("open-category");
        window.scrollTo({ top: 0, behavior: "smooth" });
        removeClasses(allBlocks, "active");
        allBlocks[index].classList.add("active");
      });
    });
  }

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".phone-header") &&
      document.querySelector("._active-phone")
    ) {
      document
        .querySelector("._active-phone")
        .classList.remove("_active-phone");
    }

    if (
      !e.target.closest(".header-catalog") &&
      !e.target.closest(".main-header__catalog-button") &&
      document.querySelector(".open-catalog")
    ) {
      bodyUnlock();
      document.querySelector(".open-catalog").classList.remove("open-catalog");
    }
  });
});
