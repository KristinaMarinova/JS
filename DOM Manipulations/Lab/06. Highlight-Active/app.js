function focus() {
    let allDivs = Array.from(document.getElementsByTagName('input')).map(x => x.parentElement);
    allDivs.forEach(element => {
        element.addEventListener("focus", () => {
            element.classList.add("focused");
        });

        element.addEventListener("blur", () => {
            element.classList.remove("focused");
        });
    });
}