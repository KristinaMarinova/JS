function toggle() {
   const div = document.querySelector('#extra');
   const button = document.querySelectorAll('.button')[0];
   if (div.style.display === 'block') {
      button.textContent = 'More';
      div.style.display = 'none';
   }
   else {
      button.textContent = 'Less';
      div.style.display = 'block';
   }
}