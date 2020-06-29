function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onSearch);
   const input = document.querySelector('#searchField');

   function onSearch(event) {
      const query = input.value.trim().toLocaleLowerCase();
      if (query.trim().length > 0) {
         const tBody = document.querySelector('tbody');
         [...tBody.querySelectorAll('tr')].forEach(r => {
            r.classList.remove('select');
         });

         [...tBody.querySelectorAll('td')].forEach(d => {
            if (d.textContent.trim().toLocaleLowerCase().includes(query)) {
               d.parentNode.classList.add('select');
            }
         });
         input.value = '';
      }
   }
}
