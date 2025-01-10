let currentNum = "";
let previousNum = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const currentDisplay = document.querySelector(".currentDisplay");

const prevDisplay = document.querySelector(".prevDisplay");

const equal = document.querySelector(".equal");
equal.addEventListener("click",calculate)

const clear = document.querySelector(".clear");


numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        getNumber(e.target.textContent);
    })
})
function getNumber(num){4
    currentNum += num;
    currentDisplay.textContent = currentNum;
}

operatorButtons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        getOperator(e.target.textContent);
    })
})
function getOperator(op){
    operator = op;
    previousNum = currentNum;
    prevDisplay.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplay.textContent = "";
}
function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    switch(operator){
        case "+":
            previousNum += currentNum;
            break;
        case "*":
            previousNum *= currentNum;
            break;
        case "/":
            previousNum /= currentNum;
            break;
        case "-":
            previousNum -= currentNum;
            break;
    }
    prevDisplay.textContent = "";
    currentDisplay.textContent = previousNum;
}