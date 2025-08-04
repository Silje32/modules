import { add } from "./add";

const calculatorInputA = document.createElement("input");
const calculatorInputB = document.createElement("input");

const submitButton = document.createElement("button");
submitButton.addEventListener("click", () => {
  let a = calculatorInputA.value;
  let b = calculatorInputB.value;

  console.log(add(a, b));
});
