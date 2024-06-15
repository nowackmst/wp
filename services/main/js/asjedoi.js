function copyText(element) {
  // This checks if the clicked element has a paragraph to copy from
  const textContainer = element.querySelector('p');
  if (!textContainer) return; // If no paragraph found, exit the function

  // Extract text from the paragraph
  const text = textContainer.innerText;

  // Create a temporary textarea to facilitate copying
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Show the copy message
  const copyMessage = element.querySelector('.copy-message');
  if (copyMessage) {
      copyMessage.style.display = 'block';
      setTimeout(() => {
          copyMessage.style.display = 'none';
      }, 2000);
  }
}

// Add event listeners to all elements that should trigger the copy function
document.querySelectorAll('.info-box').forEach(item => {
  item.addEventListener('click', function() {
      copyText(this);
  });
});


// Menambahkan event listener ke semua elemen dengan kelas .key-service
document.querySelectorAll('.key-service').forEach(item => {
  item.addEventListener('click', function() {
      copyText(this);
  });
});

// Animasi untuk moving nodes
document.addEventListener("DOMContentLoaded", function() {
  const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd"];
  const nodes = document.querySelectorAll(".moving-node");

  nodes.forEach(node => {
      node.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      node.addEventListener("animationiteration", function() {
          const newSize = Math.random() * 20 + 10; // ukuran acak antara 10px dan 30px
          node.style.width = `${newSize}px`;
          node.style.height = `${newSize}px`;
          node.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      });
  });
});
