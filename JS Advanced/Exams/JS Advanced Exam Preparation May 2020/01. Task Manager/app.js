
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

        if (task !== "" && description !== "" && dueDate !== "") {
            let newArticle = document.createElement("article");
            let header = document.createElement("h3");
            let paragraphOne = document.createElement("p");
            let paragraphTwo = document.createElement("p");
            let newDiv = document.createElement("div");
            let startButton = document.createElement("button");
            let deleteButton = document.createElement("button");
            header.textContent = task;
            newArticle.appendChild(header);
            paragraphOne.textContent = `Description: ${description}`;
            newArticle.appendChild(paragraphOne);
            paragraphTwo.textContent = `Due Date: ${dueDate}`;
            newArticle.appendChild(paragraphTwo);
            newDiv.className = "flex";
            startButton.textContent = "Start";
            startButton.className = "green";

            startButton.addEventListener("click", start);
            newDiv.appendChild(startButton);
            deleteButton.textContent = "Delete";
            deleteButton.className = "red";
            deleteButton.addEventListener("click", deleteArticle);
            newDiv.appendChild(deleteButton);
            newArticle.appendChild(newDiv);

            outputSection.getElementsByTagName("div")[1].appendChild(newArticle); 

            function start() { 
                startButton.remove(); 

                let finishButton = document.createElement("button");
                finishButton.textContent = "Finish";
                finishButton.className = "orange";
                finishButton.addEventListener("click", finish);
                newDiv.appendChild(finishButton); 

                document.getElementById("in-progress").appendChild(newArticle);

                function finish() {
                    newDiv.remove()
                    completeSection.getElementsByTagName("div")[1].appendChild(newArticle);
                }
            }
            function deleteArticle() {
                newArticle.remove();
            }
        }
    }

}