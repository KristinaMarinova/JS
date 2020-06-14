function solve() {
  let allSections = document.querySelectorAll("section");
  let rightAnswers = 0;
  let currentSection = document.getElementsByTagName("section")[0];

  let buttons = Array.from(currentSection.querySelectorAll('[data-quizindex]'));

  buttons.forEach(element => {
    element.addEventListener("click", function (){ 
      let quizValue =Number(element.getAttribute("data-quizIndex"));

      if(quizValue === 2){
        rightAnswers++;
      }
      currentSection.style.display = "none"

      currentSection = allSections[1];
      
      currentSection.style.display = "block"

      let buttons = Array.from(currentSection.querySelectorAll('[data-quizindex]'));

      buttons.forEach(element => { 
        element.addEventListener("click", function (){ 
          let quizValue =Number(element.getAttribute("data-quizIndex"));
    
          if(quizValue === 4){
            rightAnswers++;
          }
    
          currentSection.style.display = "none"
    
          currentSection = allSections[2];
          currentSection.style.display = "block"
    
          let buttons = Array.from(currentSection.querySelectorAll('[data-quizindex]'));
    
          buttons.forEach(element => { 
            element.addEventListener("click", function (){ 
              let quizValue =Number(element.getAttribute("data-quizIndex"));
        
              if(quizValue === 2){
                rightAnswers++;
              }
        
              currentSection.style.display = "none"
        
              let result = "";
              let resultUl = document.getElementById("results");
              let resultField = document.querySelector(".results-inner h1");

              if(rightAnswers === 3){
                result = "You are recognized as top JavaScript fan!";
              }
              else{
                  result = `You have ${rightAnswers} right answers`
              }

              resultField.innerHTML = result;
              resultUl.style.display = "block";
            })
          })
        })
      })
    })
  });
}