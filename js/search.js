const searchButton = document.querySelector("#search-button");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-form");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
});

const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
