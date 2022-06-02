
const fetchCoins = async () => {
  const tenCoins = (await fetch('https://api.coincap.io/v2/assets')
  .then(responde => responde.json())
  .then((data) => data.data)).filter((coin) => coin.rank <= 10);
  return tenCoins;
};

const fetchBrazil = async () => {
  const listCurrency = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
  .then(responde => responde.json())
  .then((data) => data.usd)
  return listCurrency;
}

const addCoins = async () => {
  const list = document.getElementById('coins-list');
  const tenCoins = await fetchCoins();
  const listCurrency = await fetchBrazil();
    tenCoins.forEach((coin) => {
     const newLi = document.createElement('li');
     newLi.innerText = `${coin.name}(${coin.symbol}): ${(listCurrency.brl * parseInt(coin.priceUsd)).toFixed(2)}`;
     list.appendChild(newLi);
  })
}

window.onload = () => addCoins();
