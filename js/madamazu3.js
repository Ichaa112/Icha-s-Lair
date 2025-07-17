// JavaScript Document

 document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.carousel-image');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let current = 0;
  let interval = null;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      indicators[i].classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }

  function prevSlideFunc() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlideFunc();
    resetAutoSlide();
  });

  indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      current = index;
      showSlide(current);
      resetAutoSlide();
    });
  });

  showSlide(current);
  startAutoSlide();
});