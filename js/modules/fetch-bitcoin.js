export function initFetchBitcoin() {
  const URL_BITCOIN_API = 'https://blockchain.info/ticker';

  fetch(URL_BITCOIN_API)
    .then(response => response.json())
    .then(dataJSON => {
      const btcPreco = document.querySelector('.btc-preco');
      const CemReaisEmBTC = (100 / dataJSON.BRL.sell).toFixed(4);

      btcPreco.innerText = CemReaisEmBTC;
    }).catch(erro => {
      console.log(Error(erro));
    });
}


