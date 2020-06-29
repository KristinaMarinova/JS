function solve() {
    
    let binaryOption =  document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.innerHTML = "Binary";
    let hexadecimalOption =  document.createElement("option");
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.innerHTML = "Hexadeicmal";
    let selectMenu = document.getElementById("selectMenuTo");
    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function (){ 
        let value = selectMenu.options[selectMenu.selectedIndex].value;
        let number = document.getElementById("input").value;

        if(value === "binary"){
            var bin = (+number).toString(2);
            document.getElementById("result").value = bin;
        }
        else{
            let hex = Number(number).toString(16);
            document.getElementById("result").value = hex.toUpperCase();
        }
    });
}