const params = new URLSearchParams(window.location.search)
if (params.get("nonav")=="true") {
    document.querySelectorAll("nav").forEach(nav => nav.remove())
}