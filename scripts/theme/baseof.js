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
};


document.getElementById("back-to-top").addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


document.addEventListener('DOMContentLoaded', function() {
  var cnLink = document.getElementById('cn-link');
  var enLink = document.getElementById('en-link');
  var cnContent = document.getElementById('cn-content');
  var enContent = document.getElementById('en-content');

  cnLink.addEventListener('click', function(e) {
      e.preventDefault();
      cnContent.style.display = 'block';
      enContent.style.display = 'none';
      cnLink.classList.add('active');
      enLink.classList.remove('active');
  });

  enLink.addEventListener('click', function(e) {
      e.preventDefault();
      cnContent.style.display = 'none';
      enContent.style.display = 'block';
      cnLink.classList.remove('active');
      enLink.classList.add('active');
  });
});