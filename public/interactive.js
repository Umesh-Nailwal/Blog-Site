// TOP NAVBAR ELEMENTS
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// SIDEBAR FILTER ELEMENTS
const filterToggle = document.getElementById('filterToggle');
const sidebarFilter = document.getElementById('sidebarFilter');
const filterClose = document.getElementById('filterClose');
const overlay = document.getElementById('overlay');

if (filterToggle && sidebarFilter) {
  filterToggle.addEventListener('click', () => {
    sidebarFilter.classList.add('open');
    if (overlay) overlay.classList.add('active');
  });
}

const closeFilter = () => {
  if (sidebarFilter) sidebarFilter.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
};

if (filterClose) filterClose.addEventListener('click', closeFilter);
if (overlay) overlay.addEventListener('click', closeFilter);
