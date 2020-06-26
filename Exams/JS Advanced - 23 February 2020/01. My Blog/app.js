function solve() {
   let addButton = document.querySelector('form button');
   addButton.addEventListener('click', add);

   function add(event) {
      event.preventDefault();
      let author = document.getElementById("creator").value;
      let title = document.getElementById("title").value;
      let category = document.getElementById("category").value;
      let contenet = document.getElementById("content").value;

      let newArticle = document.createElement('article');
      let header = document.createElement('h1');
      header.textContent = title;
      newArticle.appendChild(header);

      let firstParagraph = document.createElement('p');
      firstParagraph.textContent = 'Category:';
      let firstStrong = document.createElement('strong');
      firstStrong.textContent = category;
      firstParagraph.appendChild(firstStrong);
      newArticle.appendChild(firstParagraph);

      let secondParagraph = document.createElement('p');
      secondParagraph.textContent = 'Creator:';
      let secondStrong = document.createElement('strong');
      secondStrong.textContent = author;
      secondParagraph.appendChild(secondStrong);
      newArticle.appendChild(secondParagraph);

      let thirdParagraph = document.createElement('p');
      thirdParagraph.textContent = contenet;
      newArticle.appendChild(thirdParagraph);

      let div = document.createElement('div');
      div.className = 'buttons';

      let btnDelete = document.createElement('button');
      btnDelete.className = 'btn delete';
      btnDelete.textContent = 'Delete';
      btnDelete.addEventListener('click', deleteArticle);
      div.appendChild(btnDelete);

      let btnArchive = document.createElement('button');
      btnArchive.className = 'btn archive';
      btnArchive.textContent = 'Archive';
      btnArchive.addEventListener('click', archiveArticle);
      div.appendChild(btnArchive);

      newArticle.appendChild(div);

      document.getElementsByTagName('section')[1].appendChild(newArticle);

      function deleteArticle() {
         newArticle.remove();
      }
      function archiveArticle() {
         let currentList = Array.from(document.querySelectorAll(".archive-section ul li"));
         let currentListItems = currentList.map(x => x.textContent);

         currentListItems.push(title);
         currentListItems.sort((a, b) => a.localeCompare(b));

         let ul = document.querySelector(".archive-section ul");
         ul.textContent = "";
         currentListItems.forEach(element => {
            let newLi = document.createElement("li");
            newLi.textContent = element;
            ul.appendChild(newLi);
         });
         newArticle.remove();
      }
   }
}