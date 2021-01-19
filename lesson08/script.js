buttonToHideText.onclick = function() {
	text.style.display = 'none';
}

buttonToHideItself.onclick = function() {
	buttonToHideItself.style.visibility = 'hidden';
}

title.onclick = function() {
	var menuElements = document.getElementsByClassName('hidden');

	for (var i = 0; i < menuElements.length; i++) {
		if(menuElements[i].style.display == 'block'){
			menuElements[i].style.display = 'none';
		}else{
			menuElements[i].style.display = 'block'
		}
	}
}

		

