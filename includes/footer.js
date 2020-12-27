

document.body.innerHTML += 
	'<footer id=\'foot\'>'
	+ '<a type="button" id="goUp" onclick="resetScroll()">&#8679;</a>'
		+ '<span>'
		+ '&copy;' + new Date().getFullYear() + ' Luis Javier López Arredondo'
	+ '</span>'
	+ '<footer>';