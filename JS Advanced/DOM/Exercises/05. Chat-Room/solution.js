function solve() {
  let container = document.getElementById("chat_messages");
   let button = document.getElementById("send");

  button.addEventListener("click", function (){ 

   let divToAdd = document.createElement("div");
   divToAdd.classList.add("message", "my-message");
 
   let currentMessage = document.getElementById("chat_input").value; 
   divToAdd.textContent = currentMessage;
   container.appendChild(divToAdd);
   document.getElementById("chat_input").value = "";        
 });  
}