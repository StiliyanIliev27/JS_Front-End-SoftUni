function search() {
   function clearPreviousState(){
      townsList.forEach((town) => {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
         document.getElementById('result').textContent = '';
      });
   }

   const townsList = document.querySelectorAll('#towns li');
  
   clearPreviousState();

   const inputData = document.getElementById('searchText').value;

   if(inputData === ''){
      return;
   }

   const matchTowns = [...townsList].filter((x) => 
      x.textContent.toLowerCase().includes(inputData.toLowerCase()));

   for(let matchTown of matchTowns){
      matchTown.style.fontWeight = 'bold';
      matchTown.style.textDecoration = 'underline';
   }

   const output = document.getElementById('result');
   output.textContent = `${matchTowns.length} matches found`;
}
