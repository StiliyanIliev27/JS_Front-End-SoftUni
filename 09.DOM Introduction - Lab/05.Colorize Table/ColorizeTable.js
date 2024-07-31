function colorize() {
    const trElements = document.querySelectorAll('table tbody tr:nth-child(even)');
    for(const trElement of trElements){
        trElement.style.backgroundColor = 'teal';
    }
}