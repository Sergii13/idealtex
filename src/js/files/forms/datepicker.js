// Підключення модуля
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

if (document.querySelector("[data-datepicker]")) {
  flatpickr(document.querySelector("[data-datepicker]"), {
    dateFormat: "Y-m-d",
    enableTime: false,
  });
}
