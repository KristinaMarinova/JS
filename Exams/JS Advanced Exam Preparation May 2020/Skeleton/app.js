
function solve() {
    let addButton = document.getElementById("add");
    let outputSection = Array.from(document.getElementsByTagName("section"))[1];
    let completeSection = Array.from(document.getElementsByTagName("section"))[3];

    addButton.addEventListener("click", add);

    function add(event) {
        event.preventDefault();
        let task = document.getElementById("task").value;
        let description = document.getElementById("description").value;
        let dueDate = document.getElementById("date").value;

        if (task !== "" && description !== "" && dueDate !== "") { // ако има нещо в полетата
            let newArticle = document.createElement("article");
            let header = document.createElement("h3");
            let paragraphOne = document.createElement("p");
            let paragraphTwo = document.createElement("p");
            let newDiv = document.createElement("div");
            let startButton = document.createElement("button");
            let deleteButton = document.createElement("button");
            header.textContent = task;      // сложи името на задачата като h3
            newArticle.appendChild(header); // сложи хедъра в артикъла
            paragraphOne.textContent = `Description: ${description}`; // p1: какъв е Description-а
            newArticle.appendChild(paragraphOne);// сложи параграфа в артикъла
            paragraphTwo.textContent = `Due Date: ${dueDate}`; // p2: каква е датата
            newArticle.appendChild(paragraphTwo); // сложи датата в артикъла
            newDiv.className = "flex"; // див с клас име флекс
            startButton.textContent = "Start"; // на бутона старт сложи текст "старт"
            startButton.className = "green"; // и клас име "green"

            startButton.addEventListener("click", start); // при цъкване на бутона старт
            newDiv.appendChild(startButton); // сложи бутона в дива
            deleteButton.textContent = "Delete"; // бутон за триене
            deleteButton.className = "red"; // с клас име червено
            deleteButton.addEventListener("click", deleteArticle); // при цъкване на бутона изтриване
            newDiv.appendChild(deleteButton); // сложи бутона в дива
            newArticle.appendChild(newDiv); // към артикъла добави дива с двата бутона

            outputSection.getElementsByTagName("div")[1].appendChild(newArticle); 
            // към колоната дибави новия артикъл

            function start() { 
                startButton.remove(); // при старт махаме бутона

                let finishButton = document.createElement("button"); // съдаване на бутон за finish
                finishButton.textContent = "Finish"; // 
                finishButton.className = "orange";
                finishButton.addEventListener("click", finish); // при кликване на бутона finish
                newDiv.appendChild(finishButton); // към дива с бутоните добавяме новия бутон

                document.getElementById("in-progress").appendChild(newArticle);
                // към колоната добавяме новия артикъл

                function finish() { // при кликване на финиш
                    newDiv.remove() // махаме всички бутони
                    completeSection.getElementsByTagName("div")[1].appendChild(newArticle);
                    //добавяме го в колоната с приключени
                }
            }
            function deleteArticle() { // трием артикъла
                newArticle.remove();
            }
        }
    }

}