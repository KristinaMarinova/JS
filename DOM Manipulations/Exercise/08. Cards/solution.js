function solve() {
   let sectionCards = document.getElementsByClassName("cards")[0];

   sectionCards.addEventListener("click", show);
   let previousSelectedCard = [];
   let historyArray = [];
   
   function show(event){

      let card = event.target;
      let value = card.name;
     
      event.target.src = "images/whiteCard.jpg";
      let results = Array.from(document.querySelectorAll("#result span"));
      let parentId = card.parentElement.id;

      parentId === "player1Div"? results[0].textContent = value : results[2].textContent = value;

      if(previousSelectedCard.length !== 0){
         if(Number(previousSelectedCard[1]) > Number(value)){
            Array.from(document.getElementById(previousSelectedCard[0]).children).filter(x => x.name === previousSelectedCard[1])[0].style.border = "2px solid green";
            event.target.style.border = "2px solid red";
         }
         else{
            Array.from(document.getElementById(previousSelectedCard[0]).children).filter(x => x.name === previousSelectedCard[1])[0].style.border = "2px solid red";
            event.target.style.border = "2px solid green";
         }
   
         historyArray.push(`[${results[0].textContent} vs ${results[2].textContent}] `);
         document.getElementById("history").textContent = historyArray.join("");
         previousSelectedCard = [];
         results[0].textContent = "";
         results[2].textContent = "";
      }
      else{

         previousSelectedCard.push(parentId);
         previousSelectedCard.push(value);
      }
   }
}