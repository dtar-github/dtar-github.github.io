const params = new URLSearchParams(window.location.search)
nonav = (params.get("nonav") == "true")
if (nonav) {
    document.querySelectorAll("nav").forEach(nav => nav.remove())
}

const toggle = document.getElementById("dark")
const body = document.body
if (localStorage.getItem("darkMode") === "enabled" && !nonav) {
    body.classList.add("dark")
    toggle.checked = true
}
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add("dark")
        localStorage.setItem("darkMode", "enabled")
    } else {
        body.classList.remove("dark")
        localStorage.setItem("darkMode", "disabled")
    }
})