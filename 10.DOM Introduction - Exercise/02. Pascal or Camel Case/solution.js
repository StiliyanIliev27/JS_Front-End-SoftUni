function solve() {
    const validCases = ['Camel Case', 'Pascal Case'];
    const inputTextArr = document.getElementById('text').value.toLowerCase().split(' ');
    const caseInputData = document.getElementById('naming-convention').value;
    const outPutResult = document.getElementById('result');

    if(!validCases.includes(caseInputData)){
      outPutResult.textContent = 'Error!';
      return;
    }

    const pascalCaseText = inputTextArr.map((x) => 
        x[0].toUpperCase().concat(x.slice(1))).join('');

    const camelCaseText = pascalCaseText[0].toLowerCase()
        .concat(pascalCaseText.slice(1));

    const result = caseInputData === validCases[0] 
        ? camelCaseText : pascalCaseText;

    outPutResult.textContent = result;  
}