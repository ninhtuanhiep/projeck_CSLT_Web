
  const slides = document.querySelectorAll('.slide-sp');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active2');
    });
    slides[index].classList.add('active2');
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  setInterval(nextSlide, 4000); // auto hiển thị slide 4 giây

  showSlide(current); // hiển thị slide đầu tiên

