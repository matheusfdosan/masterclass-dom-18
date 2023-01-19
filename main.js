const keys = document.querySelectorAll(".key")

function playNotes(event) {
	let keyCode = getKeyCode(event)

	const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
	const audioDiv = document.querySelector(`[data-key="${keyCode}"]`)

	const notFound = !audio
	if (notFound) {
		return
	}

	playAudio(audio)
	addPlayingClass(audioDiv)
}

function addPlayingClass(key) {
	key.classList.add("playing")
}

function playAudio(audio) {
	audio.currentTime = 0
	audio.play()
}

function getKeyCode(event) {
	let keyCode
	const isKeyboard = event.type === "keydown"
	if (isKeyboard) {
		keyCode = event.keyCode
	} else {
		keyCode = event.target.dataset.key
	}
	return keyCode
}

function removePlayingClass(event) {
	event.target.classList.remove("playing")
}

keys.forEach((key) => {
	key.addEventListener("click", playNotes)
	key.addEventListener("transitionend", removePlayingClass)
})

window.addEventListener("keydown", playNotes)
