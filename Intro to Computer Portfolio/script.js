document.addEventListener('DOMContentLoaded', () => { 
  // -------------------------
  // Set current year
  // -------------------------
  document.getElementById('year').textContent = new Date().getFullYear();

  // -------------------------
  // Mobile nav toggle
  // -------------------------
  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');
  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // -------------------------
  // Typing animation
  // -------------------------
  const typedText = document.getElementById('typed-text');
  const cursor = document.querySelector('.cursor');
  const text = "I’m an ICT Student";

  let index = 0;
  let isDeleting = false;

  function type() {
    if (!isDeleting) {
      typedText.textContent = text.slice(0, index + 1);
      index++;
      if (index === text.length) {
        isDeleting = true;
        setTimeout(type, 1500); // pause before deleting
        return;
      }
    } else {
      typedText.textContent = text.slice(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(type, isDeleting ? 60 : 100);
  }
  type();

  // -------------------------
  // Smooth scroll for nav links
  // -------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      navbar.classList.remove('active');
    });
  });

  // -------------------------
  // Image popup viewer
  // -------------------------
  const popup = document.getElementById('imagePopup');
  const popupImg = document.getElementById('popupImg');
  const skillImages = document.querySelectorAll('.skills-grid img');
  let currentIndex = 0;

  skillImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      popupImg.src = img.src;
      popup.style.display = 'flex';
    });
  });

  popup.addEventListener('click', e => {
    if (e.target === popup) popup.style.display = 'none';
  });

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + skillImages.length) % skillImages.length;
    popupImg.src = skillImages[currentIndex].src;
  });

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % skillImages.length;
    popupImg.src = skillImages[currentIndex].src;
  });
});
