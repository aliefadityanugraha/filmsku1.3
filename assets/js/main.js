//-----------------------------------------------------------------------------------------------//
  const modal = document.querySelector('.modal');
  const btnOpenModal = document.querySelector('.openModal');
  const btnCloseModal = document.querySelector('.closeModal');

  btnOpenModal.addEventListener('click',()=> {
    modal.style.display = 'block';
  });

  btnCloseModal.addEventListener('click', ()=> {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e)=> {
    if(e.target == modal){
      modal.style.display = 'none';
    }
  });
//-----------------------------------------------------------------------------------------------//
    function navbarColor() {
      var navbarColorPrimary;
      var navbarColorSecondary;

      if(localStorage.getItem('dataColorMode') === 'dark') {
        navbarColorSecondary = "rgb(17, 19, 25)";
        navbarColorPrimary = "linear-gradient(to bottom,rgba(17, 19, 25,0.7),rgba(0,0,0,0))";
      } else {
        navbarColorSecondary = "#fff";
        navbarColorPrimary = "linear-gradient(to bottom,rgba(225, 225, 225,0.7),rgba(0,0,0,0))";
      }

      const navbar = document.querySelector('nav');

      if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)  {
        navbar.style.background = navbarColorSecondary;
        navbar.style.boxShadow = '1px 1px 10px rgba(0, 0, 0, 0.5)';
      } else {
        navbar.style.background = navbarColorPrimary;
        navbar.style.boxShadow = '1px 1px 10px rgba(225,225,225,0)';
      }
    }

    setInterval(navbarColor,100);
//-----------------------------------------------------------------------------------------------//
  const left = '<i class="bi bi-chevron-left owl-left"></i>';
  const right = '<i class="bi bi-chevron-right owl-right"></i>';

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      margin:10,
      responsiveClass:true,
      autoWidth:true,
      slideBy:9,
      dots:false,
      navText:[left, right],
      lazyLoad: true,
      lazyLoadEager: 1,
      responsive:{
          0:{
              items:4,
              nav:false,
              loop:false
          },
          600:{
              items:5,
              nav:false,
              loop:false
          },
          1000:{
              items:9,
              nav:true,
              loop:false
          }
      }
    });
  });
  // $(".container-nav-owl > .owl-prev").on("click", function() {
  //     $(".owl-carousel").trigger("prev.owl.carousel")
  // });
  // $(".container-nav-owl > .owl-next").on("click", function() {
  //     $(".owl-carousel").trigger("next.owl.carousel")
  // });
//-----------------------------------------------------------------------------------------------//
  const btnColorMode = document.querySelector('.form-check-input');
  const ColorMode = document.querySelector('html');

  btnColorMode.addEventListener('click',()=> {
    if(ColorMode.dataset.colorMode === 'dark') {
      ColorMode.dataset.colorMode = 'light';
      localStorage.setItem('dataColorMode','light');
    } else {
      ColorMode.dataset.colorMode = 'dark';
      localStorage.setItem('dataColorMode','dark');
    }
  });
//-----------------------------------------------------------------------------------------------//
  // const cardFilm = document.querySelector('.card-film');

  // cardFilm.addEventListener('mouseover',function() {
  //   cardFilm.style.width = '200px';
  // });