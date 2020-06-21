function solve() {
    let chooseButton = document.getElementById('dropdown');
    let dropdown = document.getElementById('dropdown-ul');

    chooseButton.addEventListener('click', show);
    dropdown.addEventListener('click', getColor);

    function show() {
        let status = document.getElementById('dropdown-ul').style.display;

        if (status === 'block') {
            document.getElementById("dropdown-ul").style.display = "none";
            document.getElementById("box").style.backgroundColor = "black";
            document.getElementById("box").style.color = "white";
        }
        else {
            document.getElementById("dropdown-ul").style.display = "block";
        }
    }

    function getColor(event) {
        let color = event.target.textContent;
        document.getElementById("box").style.backgroundColor = color;
        document.getElementById("box").style.color = "black";
    }
}