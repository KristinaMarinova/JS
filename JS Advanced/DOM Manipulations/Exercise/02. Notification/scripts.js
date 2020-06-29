function notify(message) {
   let output = document.getElementById('notification');
   output.textContent = message;
   output.style.display = "block";

   setTimeout(remove,2000);
   
   function remove(){
       output.style.display = 'none';
   }
}