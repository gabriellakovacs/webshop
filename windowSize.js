$(document).ready(function(){
	var viewPort = $("#windowSize");

	getWindowSize = function() {
		var height = $( window ).height();
		var width = $( window ).width();
		viewPort.html(width + " x " + height);
	}
	getWindowSize();
	
	$( window ).resize(function() {
		getWindowSize();
	});

});

//debounce