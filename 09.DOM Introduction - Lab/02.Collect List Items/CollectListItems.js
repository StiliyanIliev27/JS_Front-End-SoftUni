function extractText() {
    const ulElement = document.getElementById('items');
    let resultElement = document.getElementById('result')
    
    const textResult = ulElement.innerText;
    resultElement.textContent = textResult;
}