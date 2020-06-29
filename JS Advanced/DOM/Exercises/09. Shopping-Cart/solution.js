function solve() {
   let textArea = document.getElementsByTagName("textarea")[0];
   let allButtons = Array.from(document.getElementsByTagName("button"));
   let boughtProducts = [];
   let totalPrice = 0;

 
   allButtons.forEach(element => {
      element.addEventListener("click", function(){
         if(element.className === "add-product"){

            let currentElement = element.parentElement.parentElement;
            let price = Number(currentElement.getElementsByClassName("product-line-price")[0].innerHTML);
            let product = currentElement.getElementsByClassName("product-title")[0].innerHTML;

            currentText = textArea.value;
            let text = `Added ${product} for ${price.toFixed(2)} to the cart.\n`
            document.getElementsByTagName("textarea")[0].value = currentText + text;

            totalPrice += price;
            if(!boughtProducts.some(p => p === product)){
               boughtProducts.push(product);
            }
         }
         else {

            currentText = textArea.value;
            let text = `You bought ${boughtProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
            document.getElementsByTagName("textarea")[0].value = currentText + text;

            allButtons.forEach(button => button.disabled = true);
         }
      })
   });
}