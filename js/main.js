function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
    	Math.sqrt(
    		Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + 
			Math.pow(mouseY - (elem.offset().top + (elem.height()/2)), 2)
		)
	);
}

$(document).ready(function() {
	document.onmousemove = function(e) {
		$('.videos video').each(function() { 
			this.playbackRate = Math.min(calculateDistance($(this), e.pageX, e.pageY) / 300, 3);
		});
	};
});