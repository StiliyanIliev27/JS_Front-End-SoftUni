function sumTable() {
    const result = document.getElementById('sum');
    const elements = document.querySelectorAll('table tbody tr td:nth-child(2):not(#sum)');
    const sum = Array
        .from(elements)
        .reduce((sum, td) => sum + Number(td.textContent), 0);
    result.textContent = sum; 
}