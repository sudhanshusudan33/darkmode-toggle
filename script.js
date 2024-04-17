var toggled = false; 

var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle-container").onclick = function () {
        
    if(!toggled) {
        bodyTag.classList.add("night");
        circle.classList.add("dark-mode");

        toggled = true;
    } else {
        bodyTag.classList.remove("night");
        circle.classList.remove("dark-mode");

        toggled = false;
    }
    
}