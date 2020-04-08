const valorFijo = 0;
let resultadoFinal = valorFijo;
let logntries = [];



function getUserInputNumber(){
    return parseInt(userInput.value); 
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc}${operator}${calcNumber}`;
    outputResult(resultadoFinal,calcDescription); //from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


function calculateResult(calculationType){
    const enteredNumber = getUserInputNumber();
    if (calculationType === "DIVIDE"  &&
    !enteredNumber){
        return;
    }else{
        if (calculationType !== "ADD" &&
            calculationType !== "SUBTRACT" &&
            calculationType !== "MULTIPLY" &&
            calculationType !== "DIVIDE"
        ){
            return;
        }
    }
    
    const initialResult = resultadoFinal;
    let mathOperator;

    if(calculationType === "ADD"){
        resultadoFinal += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        resultadoFinal -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY"){
        resultadoFinal *= enteredNumber;
        mathOperator = "*";
    } else{
        resultadoFinal /= enteredNumber;
        mathOperator = "/";
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,resultadoFinal);
}

function add(){
    calculateResult("ADD");
}
function subtract(){
    calculateResult("SUBTRACT");
}
function multiply(){
    calculateResult("MULTIPLY");
}
function divide(){
    calculateResult("DIVIDE");
}


// Botones
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click",subtract)
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click",divide)








