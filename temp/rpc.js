function fetchData(rpcUrl, apiUrl) {
    // Fetch data from RPC
    fetch(rpcUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                document.getElementById('blockHeight').innerText = data.result.sync_info.latest_block_height;
            } else {
                document.getElementById('blockHeight').innerText = "Not available";
            }
        })
        .catch(error => {
            console.error('Error fetching data from RPC:', error);
            document.getElementById('blockHeight').innerText = "Not available";
        });

    // Fetch data from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                document.getElementById('network').innerText = data.result.node_info.network;
            } else {
                document.getElementById('network').innerText = "Not available";
            }
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
            document.getElementById('chainId').innerText = "Not available";
        });
}

fetchData('https://zetachain-testnet-rpc.itrocket.net/status', 'https://zetachain-testnet-api.itrocket.net/node_info', 'https://rpc.testnet-warden.artstake.net/net_info?');
