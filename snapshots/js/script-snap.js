///////////////////////////////////////////////////////////

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const toggleIcon = this.querySelector('.faq-toggle');
        const maxHeight = answer.scrollHeight;

        if (answer.style.maxHeight === '0px') {
            answer.style.maxHeight = `${maxHeight}px`;
            toggleIcon.classList.add('rotate');
        } else {
            answer.style.maxHeight = '0px';
            toggleIcon.classList.remove('rotate');
        }
    });
});

///////////////////////////////////////////////////////////

// Mengambil semua elemen dengan class "ttr-question"
const ttrQuestions = document.querySelectorAll('.ttr-question');

// Menambahkan event listener untuk setiap pertanyaan
ttrQuestions.forEach((question) => {
  question.addEventListener('click', toggleAnswer);
});

// Fungsi untuk menampilkan/menyembunyikan jawaban
function toggleAnswer() {
  // Mencari elemen jawaban terkait dengan pertanyaan yang diklik
  const answer = this.nextElementSibling;

  // Toggle class "active" pada pertanyaan untuk mengubah tampilan ikon toggle
  this.classList.toggle('active');

  // Toggle class "active" pada jawaban untuk mengubah tampilan animasi
  answer.classList.toggle('active');

  // Mengatur nilai maksimum tinggi jawaban berdasarkan status toggle
  if (answer.classList.contains('active')) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
  } else {
    answer.style.maxHeight = '0';
  }
}
