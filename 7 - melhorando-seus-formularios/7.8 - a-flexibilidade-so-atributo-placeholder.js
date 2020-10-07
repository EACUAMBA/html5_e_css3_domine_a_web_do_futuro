function supportsPlaceholder(){
	return "placeholder" in document.createElement('input') && "placeholder"in document.createElement('textarea');
}

function checkPlaceholderSupports(){
	if(supportsPlaceholder()){
		document.getElementById('body').classList.add('no-placeholder');
	}
}