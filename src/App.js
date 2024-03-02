import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(function () {
    async function fetchCoins() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const data = await res.json();
        setCoins(data.Search);
        console.log(data.Search);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  }, []);

  return (
    <div>
      <h1>Crypto</h1>
    </div>
  );
}

export default App;
