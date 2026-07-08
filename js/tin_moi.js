document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-box-item");
    const nextBtn = document.querySelector(".tin-next");
    const prevBtn = document.querySelector(".tin-pre");
    const itemCards = document.querySelectorAll(".item-card");

    let currentIndex = 0;
    const visibleItems = 3;
    const itemWidth = itemCards[0].offsetWidth + 30; // 30px margin-right

    nextBtn.addEventListener("click", () => {
        if (currentIndex < itemCards.length - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = currentIndex * itemWidth;
        carousel.style.transform = `translateX(-${offset}px)`;
        carousel.style.transition = "transform 0.5s ease-in-out"; // thêm hiệu ứng chuyển động
    }
});

