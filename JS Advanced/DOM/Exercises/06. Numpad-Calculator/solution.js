function solve() {
  
    let outputField = document.getElementById("expressionOutput");
    let resultOutputField = document.getElementById("resultOutput"); 
    let allButtons = Array.from(document.querySelectorAll("button"));


    allButtons.forEach(element => {

        element.addEventListener("click", function (){  
           let value = element.value;
           let operators = ["+", "-", "/", "*"];

           if(value === "Clear"){
                outputField.innerHTML = "";
                resultOutputField.innerHTML = "";
           } 
           else{
                if(value === "="){

                    let contentArray = outputField.innerHTML.match(/[^\d()]+|[\d.]+/g);
        
                    if(contentArray.length === 3){
                                    
                        let leftOperand = Number(contentArray[0]);
                        let operator = contentArray[1].trim();
                        let rightOperand =  Number(contentArray[2]);
        
                        if(Number(rightOperand) && Number(leftOperand) && operators.some(o => o === operator)){
                            let result = "";
                            switch(operator){
                                case "+": result = leftOperand + rightOperand; break;
                                case "-": result = leftOperand - rightOperand; break;
                                case "*": result = leftOperand * rightOperand; break;
                                case "/": result = leftOperand / rightOperand; break;
                            }
        
                            resultOutputField.innerHTML = result;
                        }
                        else{
                            resultOutputField.innerHTML = "NaN";
                        }
                    }
                    else{
                        resultOutputField.innerHTML = "NaN";
                    }
                } 
                else if(operators.some(o => o === value)){
                    let currentContent = outputField.innerHTML;
                    outputField.innerHTML = `${currentContent} ${value} `;
                }
                else{
                    let currentContent = outputField.innerHTML;
                    outputField.innerHTML = `${currentContent}${value}`;
                }
            }
        });
    });
}