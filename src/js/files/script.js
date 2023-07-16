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
    if (e.target.closest(".search-admin__btn")) {
      e.target.closest(".search-admin").classList.toggle("active-search-admin");
    } else if (
      !e.target.closest(".search-admin") &&
      document.querySelector(".active-search-admin")
    ) {
      document
        .querySelector(".active-search-admin")
        .classList.remove("active-search-admin");
    }
  });
});
const checkboxAll = document.querySelector("[data-checkbox-all]");

if (checkboxAll) {
  const allBtn = checkboxAll
    .closest("table")
    .querySelectorAll("tbody input[type=checkbox]");
  checkboxAll.addEventListener("change", () => {
    if (allBtn.length > 0) {
      if (checkboxAll.checked) {
        allBtn.forEach((item) => {
          item.checked = true;
        });
      } else {
        allBtn.forEach((item) => {
          item.checked = false;
        });
      }

      allBtn.forEach((item) => {
        item.addEventListener("change", () => {
          if (!item.checked) {
            checkboxAll.checked = false;
          }
          const isChecked = Array.from(allBtn).findIndex(
            (item) => item.checked === true
          );
        });
      });
    }
  });
}

function check(btn, buttons) {
  let valueRizn = parseInt(
    window.innerHeight - btn.getBoundingClientRect().bottom
  );
  let offsetTop = btn.closest("td").offsetTop;
  let offsetBottom =
    btn.closest("table").offsetHeight - btn.closest("td").offsetTop;
  buttons.style.maxHeight =
    (offsetTop > offsetBottom ? offsetTop : offsetBottom) -
    btn.offsetHeight +
    "px";
  let heightBtns = buttons.offsetHeight;
  if (offsetTop < offsetBottom) {
    return false;
  }
  return true;
}

document.addEventListener("click", (e) => {
  let target = null;
  let maxHeight = 0;
  let parent = null;
  if (e.target.closest("[data-action-btn]")) {
    e.preventDefault();
    target = e.target.closest("[data-action-btn]");
    parent = target.closest("table");
    let allActive = Array.from(
      document.querySelectorAll("[data-action].active")
    );
    allActive = allActive.filter(
      (item) => item !== target.closest("[data-action].active")
    );
    removeClasses(allActive, "active");
    target.closest("[data-action]").classList.toggle("active");
    const buttons = target
      .closest("[data-action]")
      .querySelector("[data-action-items]");
    if (check(target, buttons)) {
      target.closest("[data-action]").classList.add("top");
    } else {
      target.closest("[data-action]").classList.remove("top");
    }
  } else if (!e.target.closest("[data-action]")) {
    const allActive = document.querySelectorAll("[data-action].active");
    removeClasses(allActive, "active");
  }
});
