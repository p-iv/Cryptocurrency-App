import { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./compnents/Coins";
import Search from "./compnents/Search";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(
    function () {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&x_cg_demo_api_key=CG-QYNjgC24hDYWX86bkmGzkavr"
        )
        .then((res) => {
          setCoins(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    []
  );

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredCoins);
  return (
    <div className="crypto-app">
      <Search setSearch={setSearch} />
      <Coins filteredCoins={filteredCoins} />
    </div>
  );
}

export default App;
