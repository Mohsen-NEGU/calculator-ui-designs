var inputCalc = document.getElementById("result");
var firstValue = null;   // عدد اول
var currentOp = null;    // عملگر انتخاب‌شده


function inputNumber(number){
    inputCalc.value = inputCalc.value + number;
}

function setOperator(op) {
    if (inputCalc.value === "") return; 
    firstValue = parseFloat(inputCalc.value);
    currentOp = op;
    inputCalc.value = "";                 
}

function calculate() {
    if (firstValue === null || currentOp === null || inputCalc.value === "") return;

    var secondValue = parseFloat(inputCalc.value);
    var result;

    if (currentOp === "+") {
        result = firstValue + secondValue;
    } else if (currentOp === "-") {
        result = firstValue - secondValue;
    } else if (currentOp === "×") {
        result = firstValue * secondValue;
    } else if (currentOp === "÷") {
        if (secondValue === 0) {
            inputCalc.value = "Error";
            firstValue = null;
            currentOp = null;
            return;
        }
        result = firstValue / secondValue;
    }

    inputCalc.value = result;
    firstValue = null;
    currentOp = null;
}

function clearAll(){
    inputCalc.value = "";
    var firstValue = null; 
    var currentOp = null;
}