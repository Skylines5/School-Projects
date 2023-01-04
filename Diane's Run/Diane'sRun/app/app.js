let navIcon = document.getElementById("navIcon");
let ul = document.querySelector("ul");


navIcon.addEventListener("click", () => {

    if (ul.style.display) {
        ul.style.display = ((ul.style.display != 'none') ? 'none' : 'block')
    }
    else {ul.style.display='block'}
})