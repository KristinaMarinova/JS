function solve() {
  let inputText = document.getElementById("input");
  let sentances = inputText.textContent.split(".").filter(x => x.length > 0);
  let outputDiv = document.getElementById("output");
  let countParagraphs = Math.ceil(sentances.length / 3); 

  for (let i = 0; i < countParagraphs; i++) { 
    const element = sentances[i];
    let text = "";
    if (i < countParagraphs - 1) {
      text = sentances.slice(i * 3, i * 3 + 3);
    }
    else{ 
      let startPosition = (countParagraphs - 1) * 3; 
      text = sentances.slice(startPosition, sentances.length);
    }
    let textToAdd = text.map(x => x + ".");  
    let currentP = document.createElement("p");   
    currentP.textContent = textToAdd.join(" ");
    outputDiv.appendChild(currentP);  
  }
}