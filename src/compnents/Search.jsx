function Search({ setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="crypto-search">
      <div className="crypto-text">
        <p>Search Cryptocurrency</p>
      </div>
      <form>
        <input
          type="text"
          className="crypto-search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
