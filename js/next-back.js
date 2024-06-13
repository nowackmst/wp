/////////////////menu animasi NEXT-BACK///////////////////////////////

const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

let projectsPerPage = 12;
const projectsPerPageMobile = 4;
let currentPage = 1;

function displayProjects(page) {
  const start = (page - 1) * projectsPerPage;
  let end = start + projectsPerPage;

  if (window.innerWidth <= 768) {
    projectsPerPage = projectsPerPageMobile;
    end = start + projectsPerPage;
  }

  const projects = menuCards.slice(start, end);

  menuCardsContainer.innerHTML = "";
  projects.forEach((cardData, index) => {
    const modalId = `modal-${start + index}`;
    const menuCard = createMenuCard(cardData, modalId);
    menuCardsContainer.appendChild(menuCard);
    const joinButton = menuCard.querySelector(".join-testnet");
    joinButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const modal = createModal(modalId, cardData);
      document.body.appendChild(modal);
      window.addEventListener("click", outsideModalClickHandler);
    });
  });

  backButton.disabled = page === 1;
  nextButton.disabled = projects.length < projectsPerPage;
  menuCardsContainer.classList.add("fade-in");
  setTimeout(() => {
    menuCardsContainer.classList.remove("fade-in");
  }, 500);
}

backButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    displayProjects(currentPage);
  }
});

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  const totalPage = Math.ceil(menuCards.length / projectsPerPage);
  if (currentPage < totalPage) {
    currentPage++;
    displayProjects(currentPage);
  }
});

displayProjects(currentPage);
window.addEventListener("resize", () => {
  displayProjects(currentPage);
});

/////////////////menu animasi NEXT-BACK///////////////////////////////

