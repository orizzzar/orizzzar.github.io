window.addEventListener("load", init);
console.log("js")
function init(event) {
    console.log("init");
    const opener = document.getElementById("leftbar-open");
    opener.addEventListener("click", toggleLeftbar);
}
function toggleLeftbar(event) {
    console.log("click");
    const leftbar = document.getElementById("leftbar");
    leftbar.classList.toggle("leftbar--opened");
}
