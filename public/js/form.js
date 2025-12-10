 const formToggle = document.querySelector('.package-toggle');
 const packageOptions = document.querySelector('.package-menu')
 const userEmail = document.getElementById('email-input');

function selectPackage(){
  if (formToggle.classList.toggle('.active')) {
    packageOptions.style.display = 'block'
  } else {
    packageOptions.style.display = 'none'
  }
}



 formToggle.addEventListener('click', function(){
  selectPackage()
 })