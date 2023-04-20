import { useState } from "react";
import { useSearch } from "@/context/SearchContext";
import { BiSearch } from "react-icons/bi"; // arama ikonu için react-icons kütüphanesi kullanıldı

function Search() {
  const [search, setSearch] = useState(""); // inputa girilen değeri anlık tutan state
  const { setFilter } = useSearch(); // context ile setFilter propu alındı

  // submit işlemini gerçekleştiren fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // trim() ile search verisinin boşluk olarak gitmesi engellendi
    search.trim() !== "" ? setFilter(search) : null;
    setSearch(""); // submit işlemi gerçekleştikten sonra arama kutusunu temizler
  };

  return (
    <div>
      {/* forma onSubmit özelliği verildi */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Book Title ..."
          value={search}
        />
        {/* arama butonu tanımlandı */}
        <button className="submit-btn" type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
