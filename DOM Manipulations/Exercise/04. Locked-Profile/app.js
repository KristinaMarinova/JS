function lockedProfile() {
    let allButtons = Array.from(document.getElementsByTagName('button'));
    
    for (const button of allButtons) {
        button.addEventListener('click', show);
    }

    function show(event){
        let radioButtonLock = event.target.parentElement.children[2];
        let hiddenDiv = event.target.parentElement.children[9];
        if(radioButtonLock.checked === false){
            if(event.target.textContent === "Show more"){
                hiddenDiv.style.display = "block";
                event.target.textContent = "Hide it";
            }
            else{
                hiddenDiv.style.display = "none";
                event.target.textContent = "Show more";
            }
        }
    }
}