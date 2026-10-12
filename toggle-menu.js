
const hamburgerBtn =  document.querySelector('.js-hamburger-btn');
const CloseBtn = document.querySelector('.js-close-btn');
const sidebar = document.querySelector('.js-sidebar');

hamburgerBtn.addEventListener('click', () => {
sidebar.classList.add('open')

history.pushState({ sidebarOpen: true }, '');
}
);

CloseBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

window.addEventListener('popstate', (event) => {
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });

  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburgerBtn.contains(event.target) && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      if (history.state && history.state.sidebarOpen) {
        history.back();
      }
    }
  });