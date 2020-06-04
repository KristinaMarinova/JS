function solve() {
    let inputText = document.getElementById("input");
    let sentances = inputText.textContent.split(".").filter(x => x.length > 0);
    let outputDiv = document.getElementById("output");
    let countOParagraphs = Math.ceil(sentances.length / 3);
    
  
    for (let index = 0; index < countOParagraphs; index++) {
      const element = sentances[index];
  
      let text = "";
  
      if(index < countOParagraphs - 1){
        text = sentances.slice(index * 3, index * 3 + 3);      
      }
      else{
        let startPosition = (countOParagraphs - 1) * 3;
        text = sentances.slice(startPosition, sentances.length);
      }
  
      let textToAdd = text.map(x => x + ".");  
      let currentP = document.createElement("p");   
      currentP.textContent = textToAdd.join(" ");
      outputDiv.appendChild(currentP);
    }
  }