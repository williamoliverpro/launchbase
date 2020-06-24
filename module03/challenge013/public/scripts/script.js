const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")
const fullscreen = document.querySelector(".fullscreen")
const icons = document.querySelectorAll(".material-icons")[1]
console.log(icons)

for (let card of cards) {
    card.addEventListener("click", function () {
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}

modalOverlay.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize")
        icons.innerHTML = "fullscreen"
    }
})

fullscreen.addEventListener("click", function () {
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize")
        icons.innerHTML = "fullscreen"
    } else {
        modal.classList.add("maximize")
        icons.innerHTML = "fullscreen_exit"
    }
})