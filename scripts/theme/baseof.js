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
  var cnLinks = document.querySelectorAll('.cn-link');
  var enLinks = document.querySelectorAll('.en-link');
  var cnContents = document.querySelectorAll('.cn-content');
  var enContents = document.querySelectorAll('.en-content');

  cnLinks.forEach(function(cnLink, index) {
      cnLink.addEventListener('click', function(e) {
          e.preventDefault();
          enContents.forEach(function(enContent) {enContent.style.display = 'none';});
          cnContents.forEach(function(cnContent) {cnContent.style.display = 'block';});
          cnLinks.forEach(function(link) {link.classList.remove('active');});
          enLinks.forEach(function(link) {link.classList.remove('active');});
          cnLink.classList.add('active');
      });
  });

  enLinks.forEach(function(enLink, index) {
      enLink.addEventListener('click', function(e) {
          e.preventDefault();
          cnContents.forEach(function(cnContent) {cnContent.style.display = 'none';});
          enContents.forEach(function(enContent) {enContent.style.display = 'block';});
          cnLinks.forEach(function(link) {link.classList.remove('active');});
          enLinks.forEach(function(link) {link.classList.remove('active');});
          enLink.classList.add('active');
      });
  });
});