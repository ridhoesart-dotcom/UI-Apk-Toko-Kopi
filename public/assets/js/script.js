// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const searchForm = document.querySelector(".navbar .search-form");
document.querySelector("#search-form").onclick = () => {
  console.log("ok");
  searchForm.classList.toggle("active");
};
