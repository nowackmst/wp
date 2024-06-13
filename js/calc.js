// Fungsi untuk membuat dan menambahkan kartu proyek ke dalam elemen container
function addMenuCard(container, project) {
    const card = document.createElement('div');
    card.classList.add('menu-card');
  
    card.innerHTML = ` 
      <!-- ... (kode yang ada sebelumnya) ... -->
  
      <button type="button" class="animated-button calculator-btn" onclick="showCalculatorModal('${project.id}')">
        <i class="fa-solid fa-calculator" title="Calc" aria-hidden="true" style="font-size: 24px;"></i>
        <span class="sr-only">Calculator</span>
      </button>
  
      <div id="calculator-modal-${project.id}" class="modal">
        <div class="mt-2 mb-4 s:p-4 md:p-8 bg-customBgTransparent rounded-md border text-white">
          <h1 class="custom-content-title-secondary justify-center text-center capitalize">
            Simulate your ${project.title} staking rewards
          </h1>
          <div class="w-full my-4">
            <label for="amount" class="block mb-2 text-sm font-medium">Enter $${project.title} amount</label>
            <input type="number" id="amount" class="w-full px-3 py-2 border rounded-lg text-slate-900" placeholder="$${project.title}" value="">
            <span class="text-xs text-gray-200">~ 0</span>
          </div>
          <h1 class="custom-block-subtitle font-bold">Reward Earned</h1>
          <div class="flex items-center gap-4">
            <ul class="mt-2 mb-2 2xl:mb-6 leading-5 text-left">
              <li class="flex">
                <span class=" font-semibold font-mono capitalize">Daily Reward : 0 ${project.symbol}</span>
              </li>
              <!-- ... (Elemen lainnya) ... -->
            </ul>
          </div>
        </div>
      </div>
  
      <!-- ... (kode yang ada setelahnya) ... -->
    `;
  
    container.appendChild(card);
  }
  
  // Fungsi untuk menampilkan modal kalkulator
  function showCalculatorModal(projectId) {
    const modal = document.getElementById(`calculator-modal-${projectId}`);
    modal.style.display = 'block';
  }
  
  // Fungsi untuk menutup modal kalkulator
  function closeCalculatorModal(projectId) {
    const modal = document.getElementById(`calculator-modal-${projectId}`);
    modal.style.display = 'none';
  }
  