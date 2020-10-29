const navMenu=document.getElementById("nav-menu"),
      toggleMenu = document.getElementById("nav-burger"),
      closeMenu= document.getElementById("nav-close")

toggleMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('show')
  toggleMenu.style.display = "none";
  closeMenu.style.display = "block";
})
closeMenu.addEventListener('click',()=>{
  navMenu.classList.remove('show')
  toggleMenu.style.display = "block";
  closeMenu.style.display = "none";
})
