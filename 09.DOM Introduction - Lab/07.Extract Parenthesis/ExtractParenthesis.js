function extract(content) {
    const element = document.getElementById(content);
    const text = element.textContent;
    const pattern = /\((\w+(?: \w+)*)\)/g;
    const matches = [];
    let match;
    while ((match = pattern.exec(text)) !== null) {
        matches.push(match[1]);
        matches.push(match[1]);
    }
    return matches.join('; ');
}