function addMenuCard(container, project) { const card =
  document.createElement('div'); card.classList.add('menu-card'); card.innerHTML =
  `
  <img
  src="${project.logo}"
  alt="${project.title}"
  class="menu-card-img"
  oncontextmenu="return false;"
/>
<h3 class="menu-card-title">${project.title}</h3>

<a id="stake-btn-${project.id}" onclick="showStakeModal('${project.id}')"
  >STAKE!</a
>

<div id="stake-modal-${project.id}" class="modal" oncontextmenu="return false;">
  <div class="modal-content">
    <span class="close" onclick="closeModal('${project.id}')">&times;</span>

    <div class="header">
      <img src="${project.logo}" alt="${project.title}" />

      <h3 class="menu-modal">
        ${project.title} ${project.symbol ? `<span>${project.symbol}</span>` :
        ''}
        <div class="price-container">
          <p id="price-${project.id}">Price: Loading...</p>
        </div>
      </h3>
      <div id="apy-${project.id}" class="ApK_uOs"></div>
    </div>

    <h4 class="tapdash">
    <a href="${project.dashboardUrl}" target="_blank">DASHBOARD</a>
    <a href="${project.howToStakeUrl}" target="_blank">HOW TO STAKE</a>
  </h4>
    <div class="logo-icons">${generateLinks(project.links)}</div>
    <div class="faq-item">
      <div class="faq-question">
        <h4 class="platform-title">
          About ${project.title}?
          <span class="faq-toggle">&#9660;</span>
        </h4>
      </div>
      <div class="faq-answer">
        <p>${project.description}</p>
      </div>
    </div>
    <div class="validator-address-container">
      <div class="validator-address">
        <p>Validator Address:</p>
        <div class="validator-address-content">
          <span id="validator-address-${project.id}"
            >${project.validatorAddress}</span
          >
        </div>
      </div>
      <div class="copy-address-container">
        <button
          class="copy-address"
          onclick="copyValidatorAddress('validator-address-${project.id}')"
        >
          Copy Address
        </button>
      </div>
    </div>
  </div>
</div>
  `;

  container.appendChild(card);
}

function showStakeModal(projectId) {
  const modal = document.getElementById(`stake-modal-${projectId}`);
  modal.style.display = 'block';
}

function closeModal(projectId) {
  const modal = document.getElementById(`stake-modal-${projectId}`);
  modal.style.display = 'none';
}

function generateLinks(links) {
  return Object.entries(links).map(([key, value]) => `
    <a href="${value}" target="_blank">
      <i class="${getIconClass(key)}"></i>
    </a>
  `).join('');
}

function getIconClass(key) {
  const iconMap = {
    website: 'fas fa-globe',
    twitter: 'fab fa-twitter',
    discord: 'fab fa-discord',
    telegram: 'fab fa-telegram',
    explorer: 'fas fa-cubes',
    github: 'fab fa-github',
  };
  return iconMap[key] || '';
}

const projects = [
  {
    id: 'ethereum',
    title: 'Ethereum',
    dashboardUrl: 'https://stake.lido.fi/',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$ETH',
    logo: '/file/ethereum.png',
    description: 'Ethereum is a decentralized blockchain that lets developers create smart contracts and apps without a middleman. Our Ethereum staking service allows you to earn passive income by securing the network with your ETH holdings. Its easy to start staking with us, and we participate in liquid staking protocols like Lido, Stader, and Swell, so you can delegate any amount of ETH without minimum requirements. This means you can unlock the liquidity of your staked ETH while still earning rewards. Help secure the Ethereum PoS network and earn rewards at the same time!',
    validatorAddress: '0x00001C12fBc2989961c695494dFaF1a1bA159B7F',
    links: {
      website: 'https://ethereum.org/en/',
      twitter: 'https://twitter.com/ethdotorg',
      discord: 'https://discord.com/invite/ethereum-org',
      github: 'https://github.com/ethereum/ethereum-org-website',
      explorer: 'https://etherscan.io/',
    }
  },
  {
    id: 'polkadot',
    title: 'Polkadot',
    dashboardUrl: 'https://stake.lido.fi/',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$DOT',
    logo: '/file/polkadot.png',
    description: 'Polkadot is creating a network that combines security, scalability, and innovation through its multi-chain architecture. The Relay Chain keeps everything connected. Staking DOT, Polkadot native token, helps secure the network and earn rewards, contributing to the ecosystem growth. artstake makes it easy with tutorials, reward calculators, and essential network info.',
    validatorAddress: '5CLeMRLWjZL8rstfQFvJG84DWwKGXnSts9E7n7d5Vt7ibW5y',
    links: {
      website: 'https://polkadot.network/',
      twitter: 'https://twitter.com/Polkadot',
      discord: 'https://polkadot-discord.w3f.tools/',
      github: 'https://github.com/paritytech/polkadot',
      explorer: 'https://polkadot.subscan.io/',
    }
  },
  {
    id: 'atom',
    title: 'Cosmos',
    dashboardUrl: 'https://wallet.keplr.app/chains/cosmos-hub',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$ATOM',
    logo: '/file/cosmos.svg',
    description: 'Cosmos ($ATOM) is the central chain in the Cosmos Network, a decentralized system of linked blockchains. It plays a key role by connecting various blockchains within the network. The primary aim is to establish a network of blockchains that can interact and exchange data and tokens in a decentralized manner. Operating on a Proof-of-Stake model, Cosmos Hub relies on validators to safeguard the network and handle transactions. Validators propose new blocks, validate transactions, and are rewarded with newly created ATOM tokens. Staking with a trusted validator like Stakely allows you to earn rewards while contributing to the security and decentralization of the Cosmos Network.',
    validatorAddress: 'STAY TUNE',
    links: {
      website: 'https://cosmos.network/',
      twitter: 'https://twitter.com/cosmos',
      discord: 'https://discord.com/invite/cosmosnetwork',
      telegram: 'https://t.me/cosmosproject',
      explorer: 'https://www.mintscan.io/cosmos',
    }
  },
  {
    id: 'osmo',
    title: 'Osmosis',
    dashboardUrl: 'https://wallet.keplr.app/chains/cosmos-hub',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$OSMO',
    logo: '/file/osmo.webp',
    description: 'Osmosis is like the main hub for decentralized finance (DeFi) that connects different blockchains. It acts as the central place for trading and exchanging assets on Cosmos, which is a network of independent blockchains linked through the Inter-Blockchain Communication protocol (IBC). Think of it as the doorway to various appchains, making it easy to explore and use different blockchain applications.',
    validatorAddress: 'STAY TUNE',
    links: {
      website: 'https://cosmos.network/',
      twitter: 'https://twitter.com/osmosiszone',
      discord: 'https://discord.com/invite/osmosis',
      telegram: 'https://t.me/osmosis_chat',
      explorer: 'https://www.mintscan.io/osmosis',
    }
  },
  {
    id: 'q',
    title: 'Q-Blockchain',
    dashboardUrl: 'https://hq.q.org/staking/validators/0xB4B8023326F5a186a75c17EbC9f256A4cBa60F97',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$Q',
    logo: 'https://artstake.net/asset/node/mainnet/qchain.svg',
    description: 'Q is a new type of blockchain that aims to combine the benefits of a public, open, and decentralized ledger with the transparency and predictability of private contracts. This combination makes it suitable for a wide range of applications that want decentralization but also need scalability and reliability.',
    validatorAddress: '0xB4B8023326F5a186a75c17EbC9f256A4cBa60F97',
    links: {
      website: 'https://q.org/',
      twitter: 'https://twitter.com/QBlockchain',
      discord: 'https://discord.com/invite/YTgkvJvZGD',
      telegram: 'https://t.me/Q_Community',
      explorer: 'https://explorer.q.org/' 
    }
  },
  {
    id: 'pion',
    title: 'Muon',
    dashboardUrl: 'https://staking.polkadot.network/#/nominate',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$PION',
    logo: 'https://artstake.net/asset/node/mainnet/muon.svg',
    description: 'A Muon App is a specialized oracle application within the decentralized ecosystem, known as a dApp. Unlike traditional dApps, Muon Apps streamline the process of obtaining off-chain data for smart contracts by acting as reliable oracles. While developing a conventional oracle may seem straightforward, Muon Apps distinguish themselves by addressing complex security challenges.',
    validatorAddress: 'PRIVATE',
    links: {
      website: 'https://pion.muon.net/',
      twitter: 'https://twitter.com/muon_net',
      discord: 'https://discord.com/invite/muon',
      telegram: 'https://t.me/muon_net',
      explorer: 'https://explorer.muon.net/pion' 
    }
  },
  {
    id: 'composable',
    title: 'Composable',
    dashboardUrl: 'https://staking.polkadot.network/#/nominate',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$PICA',
    logo: 'https://artstake.net/asset/node/mainnet/composable.svg',
    description: 'Composable vision is to create an ideal cross-chain world where developers and users can interact seamlessly across various ecosystems and protocols without any limitations. This vision is driven by the belief that the future of decentralized finance (DeFi) lies in the ability to compose and integrate different DeFi applications and services in a seamless and interoperable manner. Composable Finance aims to provide a platform that enables this composability, making it easier for developers to build innovative DeFi applications and for users to access a wider range of DeFi services. Ultimately, this vision will lead to a more vibrant, diverse, and interconnected DeFi ecosystem that benefits all participants.',
    validatorAddress: 'STAY TUNE',
    links: {
      website: 'https://www.composable.finance/',
      twitter: 'https://twitter.com/composablefin',
      discord: 'https://discord.com/invite/composable',
      telegram: 'https://t.me/composable_chat',
      explorer: 'https://main.artstake.net' 
    }
  },
  {
    id: 'gitopia',
    title: 'Gitopia',
    dashboardUrl: 'https://wallet.keplr.app/chains/gitopia',
    howToStakeUrl: 'https://news.artstake.net',
    symbol: '$LORE',
    logo: 'https://artstake.net/asset/node/mainnet/gitopia.svg',
    description: 'Gitopia is the next-generation Code Collaboration Platform fuelled by a decentralized network and interactive token economy. It is designed to optimize the open-source software development process through collaboration, transparency, and incentivization.',
    validatorAddress: 'STAY TUNE',
    links: {
      website: 'https://gitopia.com/',
      twitter: 'https://twitter.com/gitopiaDAO',
      discord: 'https://discord.com/invite/aqsKW3hUHD',
      telegram: 'https://discord.com/invite/aqsKW3hUHD',
      explorer: 'https://main.artstake.net'
    }
  },
];

const menuCardsContainer = document.getElementById('menu-cards-container');
projects.forEach((project) => addMenuCard(menuCardsContainer, project));
const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT469vp4TMDWRUu69xG7B473ymyPOxi1cYyj91KwVn1vf0CzOL7yI1JnhE733F11-Dta1evRLNb7jBI/pub?gid=2065349845&single=true&output=csv';

function updateApyAndPriceData(symbol, apyElementId, priceElementId) {
  fetch(sheetUrl)
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true,
        complete: function(results) {
          const symbolData = results.data.find(row => row.symbol === symbol);
          const apyElement = document.getElementById(apyElementId);
          const priceElement = document.getElementById(priceElementId);
          if (symbolData) {
            apyElement.innerHTML = `APY: ${symbolData.apy}`;
            priceElement.innerHTML = `${symbolData.current_price}<span class="price">24h</span>`;
          } else {
            apyElement.innerHTML = '-';
            priceElement.innerHTML = '-';
          }
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function refreshData() {
  updateApyAndPriceData('eth', 'apy-ethereum', 'price-ethereum');
  updateApyAndPriceData('q', 'apy-q', 'price-q');
  updateApyAndPriceData('dot', 'apy-polkadot', 'price-polkadot');
  updateApyAndPriceData('atom', 'apy-atom', 'price-atom');
  updateApyAndPriceData('osmo', 'apy-osmo', 'price-osmo');
  updateApyAndPriceData('pion', 'apy-pion', 'price-pion');
  updateApyAndPriceData('pica', 'apy-composable', 'price-composable');
  updateApyAndPriceData('lore', 'apy-gitopia', 'price-gitopia');
}


setInterval(refreshData, 300000);
refreshData();