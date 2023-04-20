import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function details() {
  const [book, setBook] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem("selectedBook");
    const storedBook = storedData ? JSON.parse(storedData) : [];
    setBook(storedBook);
  }, []);

  console.log(book);

  return (
    <div className="details">
      <h1>{book ? book.volumeInfo.title : ""}</h1>

      {book && book.volumeInfo.imageLinks ? (
        <Image
          className="image"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book"
          w="200px"
          h="250px"
          objectFit="cover"
        />
      ) : (
        ""
      )}

      {book && book.volumeInfo.authors && (
        <h3>Author: {book.volumeInfo.authors}</h3>
      )}

      {book && book.volumeInfo.publishedDate ? (
        <div>Published Date: {book.volumeInfo.publishedDate}</div>
      ) : (
        ""
      )}

      {book && book.volumeInfo.description ? (
        <p>{book.volumeInfo.description}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default details;
