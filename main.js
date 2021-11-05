// listen for event

// let banner = document.querySelector('#topBanner')

// banner.addEventListener('scroll',function(){
//     CalculateWeekNum()

// const navbar = document.querySelector('.topNav');
// window.onscroll = () => {
//     if (window.scrollY > 100) {
//         navbar.classList.add('#topBanner');
//     } else {
//         navbar.classList.remove('topBanner');
//     }

// console.log(navbar)
// };


// // declare the dance gif as the event object
// let hero = document.querySelector('.dance')

// // listen out for scroll
// hero.addEventListener('scroll', function (){

// window.onscroll = () => {
//     if (window.scrollY > 50) {
//         opacity = 1
//     } else {
//         opacity = 0
//     }

// }

// IMAGE GALLERY

let slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
    let i;  
    let slides = document.getElementsByClassName("mySlides");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";
}

// DANCING MAN SCROLL EVENT

gsap.to(".hero2", {
    y:-850,
    duration: 2,
    scrollTrigger: {
        trigger: ".hero2",
        start: 10,
    }
})

gsap.to(".hero1", {
    y:-850,
    duration: 5,
    scrollTrigger: {
        trigger: ".hero1",
        start: 10,
    }
})

gsap.to(".text", {
    y:-20,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text",
        start: "top center",
    }
})


gsap.to(".text2", {
    y:-30,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text2",
        start: "top center",
    }
})

gsap.to(".text3", {
    y:-30,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text3",
        start: "top center",
    }
})

gsap.to(".text4", {
    y:-30,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text3",
        start: "top center",
    }
})


gsap.to(".text5", {
    y:-30,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text5",
        start: "top center",
    }
})

gsap.to(".text6", {
    y:-30,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text6",
        start: "top center",
    }
})