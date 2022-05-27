"use strict"
document.getElementsByClassName("form__btn")[0].onclick = function() {
	let textin = document.getElementsByClassName("form__textin")[0];
	let telin = document.getElementsByClassName("form__telin")[0];
	textin.style.backgroundColor = "rgb(72 40 41)";
	telin.style.backgroundColor = "rgb(72 40 41)";
}

document.getElementsByClassName("form__btn")[1].onclick = function() {
	let textin = document.getElementsByClassName("form__textin")[1];
	let telin = document.getElementsByClassName("form__telin")[1];
	let popup = document.getElementsByClassName("popup")[0];
	let popup__text = document.getElementsByClassName("popup__text")[0];
	popup__text.appendChild(newItem(textin.value));
	popup__text.appendChild(newItem(telin.value));
	popup.style.display = "flex";
	textin.value = "";
	telin.value = "";
}

function newItem (element) {
	let div = document.createElement('div');
	let txtNode = document.createTextNode(element);
	div.appendChild(txtNode);
	return (div);
}