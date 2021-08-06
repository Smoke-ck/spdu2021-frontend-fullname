const ge = s => document.querySelector(s);

const button = ge(".input__button");
const input = ge(".input__textarea");
const content = ge(".content__container");
const chat = ge(".content__chat--reverse");


button.addEventListener("click", (e) => {;
    let clone = chat.cloneNode(true);
    const cloneElem = clone.children[1].children[0];
    cloneElem.innerHTML = input.value;
    content.appendChild(clone);
    input.value = "";
});