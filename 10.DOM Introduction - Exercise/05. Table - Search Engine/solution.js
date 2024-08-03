function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableElements = document.querySelectorAll('table tbody tr');

      function clearPreviousState(){
         tableElements.forEach((el) => {
            el.classList.remove('select');
         });
      }

      clearPreviousState();
      let inputData = document.getElementById('searchField');

      const matchEl = [...tableElements].filter((x) => 
         x.textContent.toLowerCase().includes(inputData.value.toLowerCase())); 

      matchEl.forEach((el) => {
         el.classList.add('select');
      });

      inputData.value = '';
   }
}