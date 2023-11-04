const Search = ({ search, setSearch }) => {
  return (
    <div>
      <h1>😎 Emoji Search 😎</h1>
      <input
        value={search}
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
