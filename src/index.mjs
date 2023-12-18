import "./styles.css";
function solve() {
  let email = prompt("What is your email?");
  alert("Thank you, Detective. We'll be in touch.");
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", solve);
