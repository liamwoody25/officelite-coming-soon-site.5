 const formToggle = document.querySelector('.package-toggle');
 const submitBtn = document.querySelector('.form-btn');
 const packageOptions = document.querySelector('.package-menu');
 const userEmail = document.getElementById('email-input');
 const incorrectMessage = document.querySelector('.error-message');



// this function is for the toggle for the select package
function selectPackage(){
  if (formToggle.classList.toggle('.active')) {
    packageOptions.style.display = 'block'
  } else {
    packageOptions.style.display = 'none'
  }
}


// this function is for when an email is incorrect
function invalidEmail(){
  if (userEmail.value !== '') {
    userEmail.style.borderBottom = '2px solid #e74c3c'
    incorrectMessage.style.display = 'block'
  }
}



 formToggle.addEventListener('click', function(){
  selectPackage()
 })

 submitBtn.addEventListener('click', function(){
  invalidEmail()
 })