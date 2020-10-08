function showEmailError(){
	let inputEmail = document.getElementById('email');
	
	let emailField = document.getElementById('emailField').lastElementChild;
	if(!inputEmail.value.includes("@")){
		emailField.style.display = 'block';
	}else{
		emailField.style.display = 'none';
	}
	
	if(!inputEmail.value.includes(".")){
		emailField.style.display = 'block';
	}else{
		emailField.style.display = 'none';
	}
}

function showSubjectError(){
	let inputEmail = document.getElementById('subject');
	
	let emailField = document.getElementById('subjectField').lastElementChild;
	if(inputEmail.value.length >100){
		emailField.style.display = 'block';
	}else{
		emailField.style.display = 'none';
	}
	
}

function showContentError(){
	let inputEmail = document.getElementById('content');
	
	let emailField = document.getElementById('contentField').lastElementChild;
	if(inputEmail.value.length>250){
		emailField.style.display = 'block';
	}else{
		emailField.style.display = 'none';
	}

}

function supportsPlaceholder(){
	return "placeholder" in document.createElement('input') && "placeholder"in document.createElement('textarea');
}

function checkPlaceholderSupports(){
	if(supportsPlaceholder()){
		document.getElementById('body').classList.add('no-placeholder');
	}
}

