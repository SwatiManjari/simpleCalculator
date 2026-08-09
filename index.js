let result = document.getElementById("result");

let firstNumber = "";
let secondNumber = "";
let operator = "";

document.getElementById("btn0").onclick = function () {
    result.textContent += "0";
};

document.getElementById("btn00").onclick = function () {
    result.textContent += "00";
};

document.getElementById("btn1").onclick = function () {
    result.textContent += "1";
};

document.getElementById("btn2").onclick = function () {
    result.textContent += "2";
};

document.getElementById("btn3").onclick = function () {
    result.textContent += "3";
};

document.getElementById("btn4").onclick = function () {
    result.textContent += "4";
};

document.getElementById("btn5").onclick = function () {
    result.textContent += "5";
};

document.getElementById("btn6").onclick = function () {
    result.textContent += "6";
};

document.getElementById("btn7").onclick = function () {
    result.textContent += "7";
};

document.getElementById("btn8").onclick = function () {
    result.textContent += "8";
};

document.getElementById("btn9").onclick = function () {
    result.textContent += "9";
};

document.getElementById("point").onclick = function () {
    result.textContent += ".";
};

document.getElementById("plus").onclick = function () {
    firstNumber = Number(result.textContent);
    operator = "+";
    result.textContent = "";
};

document.getElementById("minus").onclick = function () {
    firstNumber = Number(result.textContent);
    operator = "-";
    result.textContent = "";
};

document.getElementById("multiply").onclick = function () {
    firstNumber = Number(result.textContent);
    operator = "*";
    result.textContent = "";
};

document.getElementById("divide").onclick = function () {
    firstNumber = Number(result.textContent);
    operator = "/";
    result.textContent = "";
};

document.getElementById("modulos").onclick = function () {
    firstNumber = Number(result.textContent);
    operator = "%";
    result.textContent = "";
};

document.getElementById("equal").onclick = function () {

    secondNumber = Number(result.textContent);

    let answer;

    if (operator === "+") {
        answer = firstNumber + secondNumber;
    }

    else if (operator === "-") {
        answer = firstNumber - secondNumber;
    }

    else if (operator === "*") {
        answer = firstNumber * secondNumber;
    }

    else if (operator === "/") {
        answer = firstNumber / secondNumber;
    }

    else if (operator === "%") {
        answer = firstNumber % secondNumber;
    }

    result.textContent = answer;
};

document.getElementById("allClear").onclick = function () {
    result.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
};

document.getElementById("clear").onclick = function () {
    result.textContent = result.textContent.slice(0, -1);
};