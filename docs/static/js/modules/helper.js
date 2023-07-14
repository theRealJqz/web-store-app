export function createElem(type, classList){//classlist is array of strings
    const elem = document.createElement(type);
    classList.forEach(c => elem.classList.add(c));
    return elem;
}

