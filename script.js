// Progress bar effect
window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}



// Navbar effect

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');
  
    window.addEventListener('scroll', () => {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
          current = section.getAttribute('id');
        }
      });
  
      navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').substring(1) === current) {
          li.classList.add('active');
        }
      });
  
      // Ensure the home button is active when at the top of the page
      if (scrollY === 0) {
        navLi.forEach(li => li.classList.remove('active'));
        document.querySelector('nav ul li:first-child').classList.add('active');
      }
  
      // Ensure the contact button is active when at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        navLi.forEach(li => li.classList.remove('active'));
        document.querySelector('nav ul li:last-child').classList.add('active');
      }
    });
  
    navLi.forEach(li => {
      li.addEventListener('click', function() {
        document.querySelector(li.querySelector('a').getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
  
      li.addEventListener('mouseover', function() {
        navLi.forEach(li => li.classList.remove('active'));
        li.classList.add('active');
      });
  
      li.addEventListener('mouseout', function() {
        const current = document.querySelector('nav ul li.active');
        if (current) {
          current.classList.remove('active');
        }
        const currentSection = document.querySelector('section.active');
        if (currentSection) {
          document.querySelector(`nav ul li a[href="#${currentSection.id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector('nav ul li:first-child').classList.add('active');
        }
      });
    });
  });
  

  