// Fungsi untuk memilih elemen
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)]; // Gunakan querySelectorAll untuk mengambil semua elemen
  } else {
    return document.querySelector(el); // Gunakan querySelector untuk mengambil satu elemen
  }
};

// Fungsi untuk menambahkan event listener pada elemen
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener)); // Tambahkan event listener untuk semua elemen
    } else {
      selectEl.addEventListener(type, listener); // Tambahkan event listener untuk satu elemen
    }
  }
};

// Menambahkan event listener setelah halaman dimuat
window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item', // Menentukan elemen yang akan difilter
    });

    let portfolioFilters = select('#portfolio-filters li', true); // Mengambil semua filter

    // Menambahkan event listener pada klik filter
    on(
      'click',
      '#portfolio-filters li',
      function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active'); // Menghapus kelas 'filter-active' dari semua filter
        });
        this.classList.add('filter-active'); // Menambahkan kelas 'filter-active' pada filter yang dipilih
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter'), // Mengatur filter berdasarkan data-filter
        });

        portfolioIsotope.on('arrangeComplete', function () {
          ADS.refresh(); // Menyegarkan tampilan jika menggunakan iklan
        });
      },
      true
    );
  }
});
