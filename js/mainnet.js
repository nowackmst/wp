function setupCard(cardId) {
    const stakeBtn = document.getElementById(`stake-btn-${cardId}`);
    const modal = document.getElementById(`stake-modal-${cardId}`);
    const closeBtn = modal.querySelector(".close");
    const copyBtn = modal.querySelector(".copy-address");
    let isCopying = false;
  
    stakeBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
      }
    });
  
    copyBtn.addEventListener("click", () => {
      if (!isCopying) {
        const validatorAddress = modal.querySelector(".validator-address-content span");
        const range = document.createRange();
        range.selectNode(validatorAddress);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
  
        copyBtn.textContent = "DONE";
        isCopying = true;
  
        setTimeout(() => {
          copyBtn.textContent = "Copy Address";
          isCopying = false;
        }, 3000);
      }
    });
  }
  
  setupCard("ethereum");
  setupCard("polkadot");
  // setupCard("composable");
  // setupCard("gitopia");
  setupCard("eywa");
  setupCard("covalent");
  setupCard("empower");
 

  