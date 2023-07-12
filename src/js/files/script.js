// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

import { bodyLock, bodyUnlock, menuClose, menuOpen } from "./functions.js";

window.addEventListener("DOMContentLoaded", () => {
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
