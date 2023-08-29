window.onscroll = function() {

  if (document.documentElement.scrollTop > 100) {
    // document.getElementById("back-to-top").style.display = "block";
    document.getElementById("back-to-top").style.opacity = 1;
  } else {
    // document.getElementById("back-to-top").style.display = "none";
    document.getElementById("back-to-top").style.opacity = 0;
  }

  if(window.scrollY > 40) {
    document.querySelector('.sticky').style.opacity = 0;
  } else {
    document.querySelector('.sticky').style.opacity = 1; 
  }
}


document.getElementById("back-to-top").addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
})

