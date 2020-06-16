function solve(){
    let table = document.getElementsByTagName("tbody")[0];
    let allRows = Array.from(table.children);
 
    table.addEventListener("click", mark);
 
    function mark(event){
       let currentBackground = event.target.parentElement.style.background;
 
       allRows.forEach(element => {
         element.style.background = ""; 
       });
 
       if(currentBackground === ""){
          event.target.parentElement.style.background = "#413f5e";
       }
    }
 }