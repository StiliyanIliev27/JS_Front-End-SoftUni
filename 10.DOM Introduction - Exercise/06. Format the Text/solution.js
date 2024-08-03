function solve() {
    const textInputArr = document.getElementById('input').value.split('.').filter(Boolean).map((x) => x.trim());
    let output = document.getElementById('output');
    for(let i = 0; i < textInputArr.length; i += 3){
        const sentence = textInputArr.slice(i, i + 3).join('. ').concat('.');
        output.innerHTML += `<p>${sentence}</p>`;
    } 
}