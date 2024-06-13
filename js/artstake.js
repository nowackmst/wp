
// Example: Animate the title text color
const animatedTitle = document.getElementById('animatedTitle');
let colorIndex = 0;

function changeTitleColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff']; // Add more colors if needed
  animatedTitle.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeTitleColor, 1000); // Change color every second
