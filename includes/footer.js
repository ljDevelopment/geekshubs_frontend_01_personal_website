

var imported = document.createElement('script');
imported.src = '../js/scroll.js';
document.head.appendChild(imported);

document.body.innerHTML += 
	'<footer id=\'foot\'>'
	+ '<a type="button" id="goUp" onclick="resetScroll()">&#8679;</a>'
		+ '<span>'
		+ '&copy;' + new Date().getFullYear() + ' Luis Javier López Arredondo'
	+ '</span>'
	+ '<footer>';