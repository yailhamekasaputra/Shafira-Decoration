// Fungsi untuk mengubah slide
const slideNavigator = (name) => {
  let slides = document.querySelectorAll('.bg-slide');
  slides.forEach((slide) => {
    slide.classList.remove('active');
    if (slide.classList.contains(name)) {
      slide.classList.add('active');
    }
  });
};

// Event listener untuk tombol slide
window.addEventListener('DOMContentLoaded', () => {
  const slideBtnList = document.querySelectorAll('.slide-btn');
  slideBtnList.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // Menghapus kelas 'active' dari semua slide button
      slideBtnList.forEach((el) => {
        el.classList.remove('active');
      });
      this.classList.add('active'); // Menambahkan kelas 'active' pada tombol yang diklik
      slideNavigator(this.getAttribute('data-target')); // Mengaktifkan slide yang sesuai
    });
  });

  // Navigasi untuk section
  const navList = document.querySelectorAll('.nav-btn');
  navList.forEach((nav) => {
    nav.addEventListener('click', function (e) {
      e.preventDefault();
      // Menghapus kelas 'active' dari semua tombol navigasi
      navList.forEach((el) => {
        el.classList.remove('active');
      });
      this.classList.add('active'); // Menambahkan kelas 'active' pada tombol yang diklik
      sectionNavigator(this.getAttribute('data-target')); // Mengaktifkan section yang sesuai
      if (window.innerWidth < 768) {
        toggleNav(); // Fungsi untuk toggle menu pada layar kecil
      }
    });
  });
});

// Fungsi untuk mengubah section
const sectionNavigator = (name) => {
  let sections = document.querySelectorAll('section');
  let header = document.querySelector('header');
  sections.forEach((section) => {
    section.classList.remove('section-show'); // Menghapus kelas 'section-show' dari semua section
    if (section.classList.contains(name)) {
      section.classList.add('section-show'); // Menambahkan kelas 'section-show' pada section yang dipilih
      header.classList.add('active'); // Menambahkan kelas 'active' pada header
    }
  });
};

// Fungsi untuk mereset header (misalnya jika ingin menghapus kelas 'active')
const resetHeader = () => {
  let header = document.querySelector('header');
  header.classList.remove('active');
};

// Toggle Mobile Navigation
function toggleNav() {
  const navMobile = document.getElementById('navMobile');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarTogglerClose = document.querySelector('.navbar-toggler-close');

  // Toggle visibility of mobile menu
  navMobile.classList.toggle('active');

  // Toggle 'active' class for icons to switch between hamburger and close icon
  navbarToggler.classList.toggle('active'); // Hide hamburger icon
  navbarTogglerClose.classList.toggle('active'); // Show close icon
}
