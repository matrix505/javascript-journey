let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let selectOp = document.getElementById("operator");
let result = document.getElementById("result");

function calculate() {
    op = selectOp.options[selectOp.selectedIndex].value;
  let temp;
  if (number1.value.length == 0 || number2.value.length == 0) {
    temp = "Placeholder cannot be empty.";
  } else {
    if (
      Number.isNaN(parseFloat(number1.value)) ||
      Number.isNaN(parseFloat(number2.value))
    ) {
      temp = "Input should be a number.";
    } else {
      let num1 = number1.value,
        num2 = number2.value;
      if (op === "Addition") {
        temp = `${num1} + ${num2} <br> <span style="color:hsl(101, 72%, 46%);">${
          parseFloat(num1) + parseFloat(num2)
        }</span>`;
      } else if (op === "Subtraction") {
        temp = `${num1} - ${num2} <br> <span style="color:hsl(101, 72%, 46%);">${
          parseFloat(num1) - parseFloat(num2)
        }</span>`;
      } else if (op === "Division") {
        if(num2 == 0){
            temp = `${num1} % <br> Cannot divide by zero!`
        }
        else{
             temp = `${num1} % ${num2} <br> <span style="color:hsl(101, 72%, 46%);">${parseFloat(num1) / parseFloat(num2)}</span>`
        }
      } else if (op === "Multiplication") {
        temp = `${num1} x ${num2} <br> <span style="color:hsl(101, 72%, 46%);">${
          parseFloat(num1) * parseFloat(num2)
        }</span>`;
      }
    }
  }
  result.innerHTML = temp;
}
function reset() {
    number1.value = ""
    number2.value =""
    result.innerHTML = ""
}
