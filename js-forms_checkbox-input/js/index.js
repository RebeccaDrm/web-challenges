console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

tosError.setAttribute("hidden", "");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }
  // --v-- write your code here --v--

  tosCheckbox.addEventListener("change", () => {
    if (tosCheckbox.checked) {
      hideTosError();
    } else {
      showTosError();
    }
  });
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
