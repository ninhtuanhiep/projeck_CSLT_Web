let slideIndex = 0;
let slideTimer;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner");
  let dots = document.getElementsByClassName("dot");

  // Ẩn tất cả các slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Xóa class 'active' khỏi tất cả các dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";

  slideTimer = setTimeout(showSlides, 5000); // Lặp lại sau 5 giây
}

// Khi người dùng chọn dot cụ thể
function currentSlide(n) {
  clearTimeout(slideTimer); // Dừng tự động để chuyển slide theo người dùng
  slideIndex = n - 1;
  showSlides(); // Gọi lại để hiển thị slide đã chọn
}

showSlides(); // Gọi ban đầu