window.addEventListener("keydown", event => {
  handleAnimation(event)
  handleAudio(event)
})

function handleAudio(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
}

function handleAnimation(event) {
  const element = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  if (!element) return
  element.classList.add("playing")
}

const allKeys = document.querySelectorAll(".key")

allKeys.forEach(key =>
  key.addEventListener("transitionend", event => {
    if (event.propertyName !== "transform") return
    event.target.classList.remove("playing")
  })
)
