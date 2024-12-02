function myTopmenu() {
    var x = document.getElementById("Topmenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
