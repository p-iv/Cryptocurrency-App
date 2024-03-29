function Coin({ image, name, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <div className="coin-name">
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p
            className={
              priceChange < 0 ? "coin-percent red" : "coin-percent green"
            }
          >
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-marketcap">
            Market Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
