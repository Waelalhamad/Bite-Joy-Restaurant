let alertContainer = document.getElementById("alert-container");
let alertTitle = document.getElementById("alert-header");
let alertMessage = document.getElementById("alert-body");

function showAlert(title, message, bg) {
  alertTitle.innerText = title;
  alertMessage.innerText = message;
  alertContainer.style.backgroundColor = bg;
  alertContainer.classList.add("show");
}

function closeAlert() {
  alertContainer.classList.remove("show");
}