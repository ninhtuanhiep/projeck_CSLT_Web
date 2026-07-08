document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-box-item");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  const itemCards = document.querySelectorAll(".item-card");
  const itemCount = itemCards.length;
  const visibleItems = 3;

  let currentIndex = 0;

  nextBtn.addEventListener("click", () => {
    if (currentIndex < itemCount - visibleItems) {
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

  function updateCarousel() { // cập nhật vị trí của carousel
    const itemWidth = itemCards[0].offsetWidth + 30; // 30px là margin-right
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // dịch chuyển carousel sang trái
    carousel.style.transition = "transform 0.5s ease-in-out"; // thêm hiệu ứng chuyển động
  }
});
