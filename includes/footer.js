

document.body.innerHTML += 
	'<footer id=\'foot\'>'
	+ '<input type="button" id="goUp" onclick="resetScroll()" value="Up" />'
		+ '<span>'
		+ '&copy;' + new Date().getFullYear() + ' Luis Javier López Arredondo'
	+ '</span>'
	+ '<footer>';