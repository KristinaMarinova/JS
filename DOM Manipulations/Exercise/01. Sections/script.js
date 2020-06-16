function create(words) {
   let container = document.getElementById('content');
   
   words.forEach(element => {
      let paragraph = document.createElement('p');
      paragraph.style.display = 'none';
      paragraph.textContent = element;
      let div = document.createElement('div');
      div.appendChild(paragraph);
      div.addEventListener('click', () => {
         paragraph.style.display = 'block';
      })
      container.appendChild(div);
   });
}