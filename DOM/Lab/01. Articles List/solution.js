function createArticle() {
	let titleInput = document.getElementById("createTitle");
	let textInput = document.getElementById("createContent");

	let newP = document.createElement("p");
	let newH3 = document.createElement("h3");

	if(titleInput.value !== "" && textInput.value !== ""){
		newH3.textContent= titleInput.value;
		newP.textContent = textInput.value;

		let newArticle = document.createElement("article");
		newArticle.appendChild(newH3);
		newArticle.appendChild(newP);

		let sectionTag = document.getElementById("articles");

		sectionTag.appendChild(newArticle);

		titleInput.value = "";
		textInput.value = "";
	}
}