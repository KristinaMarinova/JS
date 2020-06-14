
function toggle() {

    let divToView = document.getElementById("extra");    
    let button = document.getElementsByClassName("head")[0].getElementsByClassName("button").item(0);
    
    if(divToView.style.display === "block"){
        button.innerText = "MORE";
        button.innerHTML = "More"
        divToView.style.display = "none";
     }
     else{
        button.innerText = "LESS";
        button.innerHTML = "Less"
        divToView.style.display = "block";
     }
}