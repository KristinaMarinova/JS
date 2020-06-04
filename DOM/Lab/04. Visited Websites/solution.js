function solve() {

    const allLinks = document.querySelectorAll("a");
    const visits = document.querySelectorAll("p");
  
    for (let index = 0; index < allLinks.length; index++) {
      let currentLink = allLinks[index];
      let currentP = visits[index];
    
      currentLink.addEventListener("click", function (){  
        let count = Number(currentP.innerHTML.split(" ")[1]);   
        currentP.innerHTML = `visited ${++count} times`;          
      });    
    }
  }