import { useEffect, useState } from "react";

function details() {
  const [book, setBook] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem("selectedBook");
    const storedBook = storedData ? JSON.parse(storedData) : [];
    setBook(storedBook);
  }, []);

  console.log(book);

  return <div>{book ? book.volumeInfo.title : ""}</div>;
}

export default details;
