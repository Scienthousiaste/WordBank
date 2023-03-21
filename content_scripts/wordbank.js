const SEPARATOR = "\u180E";
let currentHoveredText;

document.addEventListener("mouseover", currentHover)
document.addEventListener("dblclick", captureContext)

function currentHover(e) {
    if (e.target.textContent) {
        currentHoveredText = e.target.textContent;
    }
}

function localToArray(str) {
    return str === null ? [] : str.split(SEPARATOR);
}

function arrayToLocal(arr) {
    console.log(arr)
    return arr.join(SEPARATOR);
}

function clean(text) {
    return text.replace(SEPARATOR, "");
}

function captureContext(e) {
    const selectedWord = window.getSelection()?.toString() || "";
    const context = clean(currentHoveredText);
    const maybeExistingArray = localToArray(localStorage.getItem(selectedWord));
    maybeExistingArray.push(context);

    localStorage.setItem(selectedWord, arrayToLocal(maybeExistingArray));
    console.log(localToArray(localStorage.getItem(selectedWord)));
}