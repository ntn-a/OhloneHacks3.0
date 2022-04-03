const classes = ["⭐", "🦸🏽‍️", "🖌️", "👌🏽"];

function openNav() {
    document.getElementById("menu").style.width = "144px"
    var items = document.getElementsByClassName("item");
    for (var elementKey in items) {
        items[elementKey].textContent += " - Class " + (parseInt(elementKey) + 1);
    }
}

function closeNav() {
    var items = document.getElementsByClassName("item");
    for (var elementKey in items) {
        items[elementKey].textContent = classes[elementKey];
    }
    document.getElementById("menu").style.width = "20px"
}

function toggleMenu(menu) {
    menu.classList.toggle('change')
    const width = document.getElementById("menu").style.width;
    if (width === "20px" || width === "") {
        openNav()
    }
    else {
        closeNav()
    }
}