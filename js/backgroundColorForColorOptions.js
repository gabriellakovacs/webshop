var colorOptionList = document. querySelectorAll(".chooseColor label");

function setColorForColorOptions() {
	for (var l = 0; l < colorOptionList.length; l++) {
		var color = (colorOptionList[l].htmlFor).split("-")[1];
		colorOptionList[l].style.background = "#" + color;
	}
	
}

$(document).ready(function () {             
    setColorForColorOptions();
});