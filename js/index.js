let panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleOpenActiveClass(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleOpenActiveClass);
});
