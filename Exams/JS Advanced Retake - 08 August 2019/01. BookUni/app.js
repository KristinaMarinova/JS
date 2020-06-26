function solve() {
    let button = document.getElementsByTagName('button')[0];
   let inputs = Array.from(document.querySelectorAll('form input'));
   let bookshelves = Array.from(document.getElementsByClassName('bookShelf'));
   let totalProfitField = document.getElementsByTagName('h1')[1];

    button.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let title = inputs[0].value;
        let year = Number(inputs[1].value);
        let price = Number(inputs[2].value);
        let isNewBook = true;

        if (year < 2000) {
            isNewBook = false;
            price = price * 0.85;
        }

        if(title !== "" &&  year > 0 && price > 0){
            let newDiv = document.createElement('div');
            newDiv.className = 'book';
            let paragraph = document.createElement('p');
            paragraph.textContent = `${title} [${year}]`;
            newDiv.appendChild(paragraph);
            let buyButton = document.createElement('button');
            buyButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            buyButton.addEventListener('click', buy);
            newDiv.appendChild(buyButton);

            if(isNewBook){
                let moveButton = document.createElement('button');
                moveButton.textContent = 'Move to old section' ;
                newDiv.appendChild(moveButton);
                moveButton.addEventListener('click', move);
                bookshelves[1].appendChild(newDiv);

                function move(){
                    bookshelves[0].appendChild(newDiv);
                    moveButton.remove();
                    buyButton.textContent = `Buy it only for ${(price * 0.85).toFixed(2)} BGN`;
                    bookshelves[0].appendChild(newDiv);
                }
            }
            else {
                bookshelves[0].appendChild(newDiv);
            }
            function buy() {
                let currentProfit = Number(totalProfitField.textContent.split(' ')[3]);
                let currentPrice = Number(buyButton.textContent.split(' ')[4]);
                totalProfitField.textContent = `Total Store Profit: ${(currentProfit + currentPrice).toFixed(2)} BGN`;
                newDiv.remove();
            }
        }
    }
}