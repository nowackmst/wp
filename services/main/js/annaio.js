setInterval(function() {
    var rpcStatus = document.getElementById('rpcStatus');
    if (rpcStatus.textContent.trim() === "Inactive") {
        rpcStatus.classList.toggle('blink-red');
    } else if (rpcStatus.textContent.trim() === "Active") {
        rpcStatus.classList.toggle('blink-green');
    }
}, 1000);
