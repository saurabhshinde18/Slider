const slides = document.querySelectorAll(".slide");
let currentIndex = 1; 

function updateSlides() {
    slides.forEach((slide, index) => {
        const offset = index - currentIndex;

    
        slide.style.transform = `translateX(${offset * 370}px) scale(${index === currentIndex ? 1 : 0.8})`;
        slide.style.opacity = index === currentIndex ? "1" : "0.6";
        slide.style.zIndex = index === currentIndex ? "2" : "1";
    });
}

function changeSlide(direction) {
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlides();
}


setInterval(() => {
    changeSlide(1);
}, 5000);


updateSlides();
