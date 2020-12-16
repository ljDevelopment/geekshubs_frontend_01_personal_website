

document.body.innerHTML += 
	'<footer id=\'foot\'>'
	+ '<input type="button" id="goUp" onclick="resetScroll()" value="Up" />'
		+ '<span>'
		+ '&copy; <script>document.write(new Date().getFullYear());</script> Luis Javier López Arredondo'
	+ '</span>'
	+ '<footer>';