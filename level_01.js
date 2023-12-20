let button = document.querySelector(".button")
let exit = document.querySelector(".exit")
let inputs = document.querySelectorAll("input")
let bomb = document.querySelector(".bomb")
let zombie = document.querySelector(".zombie")
let fire = document.querySelector(".fire")

/******** Удар по зомбі ********/

button.addEventListener("click", ()=>{
if (
	inputs[0].value == "center" &&
	inputs[1].value == "center"
) {

	/* вибух з влучанням*/

	setTimeout(() => {
		bomb.style.display = "block"
	}, 1000);

	setTimeout(() => {
		zombie.style.display = "none"
	}, 1800);

	setTimeout(() => {
		bomb.style.display = "none"
	}, 2500);

	setTimeout(() => {
		exit.style.display = "block"
	}, 3500);

	setTimeout(() => {
		fire.style.justifyContent = inputs[0].value
		fire.style.alignItems = inputs[1].value
	}, 100);

	/* кінець вибуху */

	setTimeout(() => {
		button.style.background = "green"
	}, 100);


}
else{

		/* вибух без влучання*/

		setTimeout(() => {
			bomb.style.display = "block"
		}, 1000);

		setTimeout(() => {
			fire.style.justifyContent = inputs[0].value
			fire.style.alignItems = inputs[1].value
		}, 100);

		setTimeout(() => {
			bomb.style.display = "none"
		}, 2500);

		/* кінець вибуху */


	setTimeout(() => {
		button.style.background = "red"
	}, 100);

	setTimeout(() => {
		button.style.background = "black"
	}, 2000);


}
})

