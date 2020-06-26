const cards = document.querySelectorAll(".card")
const fullscreen = document.querySelector(".fullscreen")

for (let card of cards) {
    card.addEventListener("click", function () {
        const pageId = card.getAttribute("id")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}

fullscreen.addEventListener("click", function () {
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize")
        icons.innerHTML = "fullscreen"
    } else {
        modal.classList.add("maximize")
        icons.innerHTML = "fullscreen_exit"
    }
})