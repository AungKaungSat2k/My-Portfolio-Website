const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// NAVBAR
const  sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}