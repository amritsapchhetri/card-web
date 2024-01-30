const cardHolderShow = document.querySelector(".card-holder");
const cardNumberShow = document.querySelector(".card-number");
const monthShow = document.querySelector(".month");
const yearShow = document.querySelector(".year");
const cvcShow = document.querySelector(".cvc");

const cardHolderInput = document.querySelector("input#name");
const cardNumberInput = document.querySelector("input#number");
const monthInput = document.querySelector("input#month");
const yearInput = document.querySelector("input#year");
const cvcInput = document.querySelector("input#cvc");

const form = document.querySelector(".form");
function clearErrors() {
  const errorShow = document.querySelectorAll("[class^=error]");
  errorShow.forEach((error) => {
    error.innerText = "";
  });
  const form = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("input-error");
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (cardHolderInput.value === "") {
    nameError.innerText = "please enter your name";
    cardHolderInput.classList.add("input-error");
  }
  if (cardHolderInput.value === "") {
    nameError.innerText = "please enter your card number";
    cardHolderInput.classList.add("input-error");
  }
  if (monthInput.value === "" || yearInput.value === "") {
    expiry.innerText = "Please enter your card expiry date";
    monthInput.value === ""
      ? monthInput.classList.add("input-error")
      : yearInput.classList.add("input-error");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("submitted");
});

form.addEventListener("submit", handleSubmit);

cardHolderInput.addEventListener("keyup", (e) => {
  cardHolderShow.innerText = e.target.value;
});
