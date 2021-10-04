const navbar = document.getElementById("navbar");
const grid = document.getElementById("grid");

var prev_nav = "o";
var prev_grid = "orginal"



document.getElementById("or").addEventListener("click", function () {
    func("orginal", "o")
});

document.getElementById("ce").addEventListener("click", function () {
    func("center", "c")
});

document.getElementById("ho").addEventListener("click", function () {
    func("horizontal", "h")
});

document.getElementById("hor").addEventListener("click", function () {
    func("horizontal-reversed", "hr")
});

document.getElementById("ve").addEventListener("click", function () {
    func("verticale", "v")
});

document.getElementById("ver").addEventListener("click", function () {
    func("verticale-reversed", "vr")
});


function func(x, y) {
    navbar.classList.remove(prev_nav);
    navbar.classList.add(x);
    prev_nav = x;

    grid.classList.remove(prev_grid);
    grid.classList.add(y);
    prev_grid = y;
}





