
new Swiper('.logo-slider', {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    
});

let buttonShow = document.querySelector(".show-more");
let wrapper = document.querySelector('.logo-slider__wrapper');
let buttonShowText = buttonShow.querySelector(".show-more__text");
show();
function show() {
    buttonShow.addEventListener('click', function(evt) {
    evt.preventDefault();
    wrapper.classList.remove('logo-slider__wrapper--hidden');
    buttonShowText.textContent = "Cкрыть";
    let buttonHide = buttonShow;
    hide(buttonHide);
})
}
function hide (buttonHide) {
    if (buttonShowText.textContent === "Cкрыть") {
        buttonHide.addEventListener('click', function(evt){
            wrapper.classList.add('logo-slider__wrapper--hidden');
            buttonShowText.textContent = "Показать все";
            show();
        })
    }
}

