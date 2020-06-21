
function solve() {
    let generateButton = document.getElementsByTagName("button")[0];
    let buyButton = document.getElementsByTagName("button")[1];
  
    let textAreaInput = document.getElementsByTagName("textarea")[0];
    let tableBody = document.getElementsByTagName("tbody")[0];
  
    generateButton.addEventListener("click", generate);
    buyButton.addEventListener("click", buy);
  
    function generate(event){
      let allObjects = JSON.parse(textAreaInput.value);
      
      allObjects.forEach(obj => {
  
        let tableRow = document.createElement("tr");
  
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = obj.img;
        td1.appendChild(img);
        tableRow.appendChild(td1);
  
        let td2 = document.createElement("td");
        let p2 = document.createElement("p");
        p2.textContent = obj.name;
        td2.appendChild(p2);
        tableRow.appendChild(td2);
  
        let td3 = document.createElement("td");
        let p3 = document.createElement("p");
        p3.textContent = obj.price;
        td3.appendChild(p3);   
        tableRow.appendChild(td3);
  
        let td4 = document.createElement("td");
        let p4 = document.createElement("p");
        p4.textContent = obj.decFactor;
        td4.appendChild(p4);
        tableRow.appendChild(td4);
  
        let td5 = document.createElement("td");
        let input = document.createElement("input");
        input.type = "checkbox";
        td5.appendChild(input);
        tableRow.appendChild(td5);
  
        document.getElementsByTagName("tbody")[0].appendChild(tableRow);
      });
    }
  
    function buy(event){
      let products = [];
  
      Array.from(tableBody.children).forEach(element => {
        if(element.children[4].children[0].checked === true){
          products.push(element);
        }
      });
  
      let boughtProductsNames = products.map(x => x.children[1].textContent);
      let totalPrice = products.map(x => x.children[2].textContent).reduce((a, b) => a + Number(b), 0);
      let average = products.map(x => x.children[3].textContent).reduce((a, b) => a + Number(b), 0)/products.length;
  
      document.getElementsByTagName("textarea")[1].value =  `Bought furniture: ${boughtProductsNames.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${average}`
    }
  }