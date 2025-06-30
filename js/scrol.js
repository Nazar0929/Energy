document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero'); // твоя первая секция
  const heroHeight = hero.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > heroHeight) {
      if (currentScroll > lastScrollTop) {
        // Скролл вниз — спрятать хедер
        header.classList.add('hide');
      } else {
        // Скролл вверх — показать хедер
        header.classList.remove('hide');
      }
    } else {
      // Пока на hero-секции — всегда показывать хедер
      header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
