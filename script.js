let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vib-btn')
//懒加载
const images = document.querySelectorAll('img');
const callback = entries =>{
  entries.forEach( entry =>{
    if(entry.isIntersecting){
      const image = entry.target;
      const data_src = image.getAttribute('data-src');
      image.setAttribute('src', data_src);
      observe.unobserve;
    }
  });
};
const observe = new IntersectionObserver( callback );
images.forEach( image =>{
  observe.observe(image);
});


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('action');
    loginForm.classList.remove('action');
    menu.classList.remove('fa-times');
    navbar.classList.remove('action');
};

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('action');
});

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('action');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('action');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('action');
});

// 小圆点切换
videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});