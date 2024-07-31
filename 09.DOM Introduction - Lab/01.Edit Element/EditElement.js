function editElement(htmlElement, match, replacer) {
    htmlElement.textContent = htmlElement.textContent.replaceAll(match, replacer);
}