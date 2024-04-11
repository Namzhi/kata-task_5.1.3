new Swiper(".logo-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 16,
    watchOverflow: true,
    breakpoints: {
        768: {
            enabled: false,
            spaceBetween: 24,
        },
    },
});

let buttonShow = document.querySelector(".logo-slider__showmore");
let buttonShowText = buttonShow.querySelector(".logo-slider__showmore-text");
let wrapper = document.querySelector(".logo-slider__wrapper");

function show() {
    buttonShow.addEventListener("click", function (evt) {
        evt.preventDefault();

        wrapper.classList.remove("logo-slider__wrapper--hidden");
        wrapper.classList.add("logo-slider__wrapper--open-margin-bottom");

        buttonShowText.textContent = "Cкрыть";

        hide();
    });
}

function hide() {
    if (buttonShowText.textContent === "Cкрыть") {
        buttonShow.addEventListener("click", function (evt) {
            evt.preventDefault();

            wrapper.classList.add("logo-slider__wrapper--hidden");
            wrapper.classList.remove("logo-slider__wrapper--open-margin-bottom");

            buttonShowText.textContent = "Показать все";
            show();
        });
    }
}

show();
