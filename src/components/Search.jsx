const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquiar:</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite para pesquisar..." />
    </div>
  )
}

export default Search
