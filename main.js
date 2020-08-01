function hamburger() {
    var a = document.getElementById("nav")
    if (a.style.display === "none") {
        a.style.display = "block"

    } else {
        a.style.display = "none"
    }

}

function m() {
    var y = document.getElementById("arrow")
    var x = document.getElementById("aw-1");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.classList.add("arrow-up")

    } else {
        x.style.display = "none";
        y.classList.remove("arrow-up")
    }

}


function changeRight() {
    var left = document.getElementById("tc-1");
    var right = document.getElementById("tc-2");
    var tab1 = document.getElementById("tab-1");
    var tab2 = document.getElementById("tab-2");

    left.style.display = "none";
    tab1.style.height = "3vh";
    tab1.style.borderRadius = "20px"

    right.style.display = "block";
    tab2.style.height = "6vh";
    tab2.style.borderRadius = "20px 20px 0px 0px";


}


function changeLeft() {
    var left = document.getElementById("tc-1");
    var right = document.getElementById("tc-2");
    var tab1 = document.getElementById("tab-1");
    var tab2 = document.getElementById("tab-2");

    left.style.display = "block";
    tab1.style.height = "6vh";
    tab1.style.borderRadius = "20px 20px 0px 0px"

    right.style.display = "none";
    tab2.style.height = "3vh";
    tab2.style.borderRadius = "20px";


}