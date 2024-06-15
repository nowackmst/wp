function fetchData(rpcUrl, apiUrl, rpcStatusId, blockHeightId, networkId) {
    fetch(rpcUrl)
        .then(response => {
            if (response.ok) {
                document.getElementById(rpcStatusId).innerText = "Active";
                return response.json();
            } else {
                throw new Error('RPC not responding');
            }
        })
        .then(data => {
            console.log('RPC Data:', data);
            if (data.result && data.result.sync_info) {
                document.getElementById(blockHeightId).innerText = data.result.sync_info.latest_block_height;
            } else {
                document.getElementById(blockHeightId).innerText = "Not available";
            }
        })
        .catch(error => {
            console.error('Error fetching block height from RPC:', error);
            document.getElementById(blockHeightId).innerText = "Not available";
            document.getElementById(rpcStatusId).innerText = "Inactive";
        });


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('API Data:', data);
            if (data && data.result && data.result.node_info) {
                document.getElementById(networkId).innerText = data.result.node_info.network;
            } else {
                document.getElementById(networkId).innerText = "Not available";
            }
        })
        .catch(error => {
            console.error('Error fetching network from API:', error);
            document.getElementById(networkId).innerText = "Not available";
        });
}

// Call the function for Warden
fetchData(
    'https://rpc.testnet-warden.artstake.net/status', 
    'https://rpc.testnet-warden.artstake.net/status',
    'wardenRpcStatus',
    'wardenBlockHeight',
    'wardenNetwork'
);

// Call the function for Initia
fetchData(
    'https://initia-testnet-rpc.itrocket.net/status',
    'https://initia-testnet-rpc.itrocket.net/status',
    'initiaRpcStatus',
    'initiaBlockHeight',
    'initiaNetwork'
);

fetchData(
    'https://elys-testnet-rpc.itrocket.net/status',
    'https://elys-testnet-rpc.itrocket.net/status',
    'elysRpcStatus',
    'elysBlockHeight',
    'elysNetwork'
);
