import Coin from "./Coin";

function Coins({ filteredCoins }) {
  return (
    <div className="coins-container">
      {filteredCoins?.map((coin) => {
        return (
          <Coin
            coin={coin}
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default Coins;
