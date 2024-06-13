function copyText(event) {
    const text = event.target.parentElement.innerText.trim();

    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Menampilkan pesan copied
    const copyMessage = document.createElement('div');
    copyMessage.textContent = 'Copied!';
    copyMessage.classList.add('copy-message');
    event.target.parentElement.appendChild(copyMessage);

    // Menghapus pesan copied setelah beberapa detik
    setTimeout(() => {
        copyMessage.remove();
    }, 2000);
}


function copyText(element) {
    const text = element.querySelector('p').innerText;

    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Tambahkan kelas copied untuk animasi dan penanganan pesan copied
    element.classList.add('copied');
    setTimeout(() => {
        element.classList.remove('copied');
    }, 1000);
}


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
  
  