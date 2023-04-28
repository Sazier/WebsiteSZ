const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links'); /*nimmt die klassen aus den HTML Code*/
    const navLinks = document.querySelectorAll('.nav-links li');
  
  
    burger.addEventListener('click', ()=> {
  
      //Toggle Nav
      nav.classList.toggle('nav-active');
  
      //Animate Links
      navLinks.forEach((link, index) => {  //run a function (link=>{..});
          if (link.style.animation) {
              link.style.animation = '';
      }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4 }s`
      }
      });
  
      //Burger Animation
      burger.classList.toggle('toggle');
  
    });
  
  
  
  }
  
  navSlide();