function toggle() {
    const extraText = document.querySelector('#extra');
    const buttonText = document.querySelector('.button'); 

    if(extraText.style.display === 'none'){
        extraText.style.display = 'block';
        buttonText.textContent = 'Less';
    } else{
        extraText.style.display = 'none';
        buttonText.textContent = 'More';
    }
}