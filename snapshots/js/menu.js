// Fungsi untuk menyalin teks ke clipboard
function copyUrl(imageId, button) {
    if (!button.classList.contains('copying')) {
        var imageAlt = document.getElementById(imageId).getAttribute('alt');

        var range = document.createRange();
        var textElement = document.createElement('textarea');
        textElement.value = imageAlt;
        document.body.appendChild(textElement);
        range.selectNode(textElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        document.body.removeChild(textElement);
        button.textContent = 'DONE';
        button.classList.add('copying');
        setTimeout(function () {
            button.textContent = 'Copy URL';
            button.classList.remove('copying');
        }, 3000);
    }
}

// ...

function fetchData(url, heightId, dateId, sizeId, chainId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.last_height !== "") {
                document.getElementById(heightId).innerText = "HEIGHT: " + data.last_height;
            } else {
                document.getElementById(heightId).innerText = "HEIGHT: Not available";
            }
            document.getElementById(dateId).innerText = "DATE: " + (data.date || "Not available");
            let sizeInGB = formatSize(data.snap_size);
            document.getElementById(sizeId).innerText = "SIZE: " + (sizeInGB || "Not available");
            document.getElementById(chainId).innerText = "CHAIN ID: " + (data.chain || "Not available");
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById(heightId).innerText = "HEIGHT: Not available";
            document.getElementById(dateId).innerText = "DATE: -";
            document.getElementById(sizeId).innerText = "SIZE: -";
            document.getElementById(chainId).innerText = "CHAIN ID: -";
        });
}

function formatSize(bytes) {
    const gigabytes = bytes / (1024 ** 3);
    return gigabytes.toFixed(2) + " GB";
}

// EVM
fetchData('https://example.com/ethereum-snapshot-api', 'ethereum-height', 'ethereum-date', 'ethereum-size', 'ethereum-chain');
fetchData('https://example.com/ethereum-snapshot-api', 'q-height', 'q-date', 'q-size', 'q-chain');
fetchData('https://example.com/ethereum-snapshot-api', 'eywa-height', 'eywa-date', 'eywa-size', 'eywa-chain');
fetchData('https://example.com/ethereum-snapshot-api', 'erbie-height', 'erbie-date', 'erbie-size', 'erbie-chain');

// COSMSOS
fetchData('https://services.staketab.org/backend/cosmos/', 'cosmos-height', 'cosmos-date', 'cosmos-size', 'cosmos-chain');
fetchData('https://services.staketab.org/backend/gitopia/', 'lore-height', 'lore-date', 'lore-size', 'lore-chain');
fetchData('https://services.staketab.org/backend/quicksilver/', 'quicksilver-height', 'quicksilver-date', 'quicksilver-size', 'quicksilver-chain');
fetchData('https://services.staketab.org/backend/gravity/', 'gravity-height', 'gravity-date', 'gravity-size', 'gravity-chain');
fetchData('https://services.artstake.net/snapshots/c4e/', 'c4e-height', 'c4e-date', 'c4e-size', 'c4e-chain');
fetchData('https://services.staketab.org/backend/sei-testnet/', 'sei-height', 'sei-date', 'sei-size', 'sei-chain');
fetchData('https://services.staketab.org/backend/entangle-testnet/', 'entangle-height', 'entangle-date', 'entangle-size', 'entangle-chain');
fetchData('https://empower-mainnet-rpc.artstake.net:443', 'empower-height', 'empower-date', 'empower-size', 'empower-chain');

// POLKADOT
fetchData('https://services.artstake.net/snapshots/dot/', 'dot-height', 'dot-date', 'dot-size', 'dot-chain');
fetchData('https://services.artstake.net/snapshots/ctc/', 'ctc-height', 'ctc-date', 'ctc-size', 'ctc-chain');

// Other


