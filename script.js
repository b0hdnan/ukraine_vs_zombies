let textBox = document.querySelector(".text-box")
let textBoxes = document.querySelectorAll(".text")
let button = document.querySelector(".button")
/******** Поява тексту ********/
setTimeout(() => {
	textBox.style.display = "flex"
}, 2000);

setTimeout(() => {
	textBoxes[0].style.display = "block"
}, 3000);

setTimeout(() => {
	textBoxes[1].style.display = "block"
}, 4000);

setTimeout(() => {
	textBoxes[2].style.display = "block"
}, 5000);

setTimeout(() => {
	textBoxes[3].style.display = "block"
}, 6000);

setTimeout(() => {
	button.style.display = "block"
}, 7000);