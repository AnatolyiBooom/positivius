document.addEventListener('DOMContentLoaded', function() {

  let burger = document?.querySelector('.header__nav-btn');
    let nav = document?.querySelector('.header__nav');
    let navItems = nav?.querySelectorAll('.header__nav-link');
    let body = document.body;
    let header = document?.querySelector('.header');
    let headerHeight = header.offsetHeight;

        console.log(headerHeight)
        document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

        burger?.addEventListener('click', () => {
        body.classList.toggle('stop-scroll');
        burger?.classList.toggle('burger--active');
        nav?.classList.toggle('nav--active');

        });

        navItems.forEach(el => {
        el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--active');
            });
        });




  $(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
  });
  
   var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
  
  
      let validation = new JustValidate('#formInput' ,{
        errorLabelStyle: {
          color: '#FF6F6F',
          borderColor: 'red'
        }
      })

      validation.addField("#username", [
        {
          rule: 'required', 
          errorMessage : 'Введите имя'
        },
        {
          rule: 'minLength', 
          value: 2,
          errorMessage : 'Минимум 2 символа'
        }
      ])

      validation.addField("#usermail", [
        {
          rule: 'required' , 
          errorMessage : 'Введите почту'
        },
        {
          rule: 'email' , 
          errorMessage : 'Введите свою почту'
        },
  
      ])
      
      validation.addField("#usertext", [
        {
          rule: 'required', 
          errorMessage : 'Что скажете?'
        },
        {
          rule: 'minLength', 
          value: 7,
          errorMessage : 'Минимум 7 символов',
          errorMessage : 'Введите текст'
        }
      ])
  
    })

