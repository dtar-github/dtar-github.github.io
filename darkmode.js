const toggle = document.getElementById("dark");
const body = document.body;
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
    toggle.checked = true;
}
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
    }
});