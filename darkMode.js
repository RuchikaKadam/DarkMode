var toggled = false; 

var heading = document.getElementsByTagName("h1")[0];
var body = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle-container").onclick = function () {
        
    if(!toggled) {
        heading.classList.add("color-white");
        body.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        heading.classList.remove("color-white");
        body.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
}