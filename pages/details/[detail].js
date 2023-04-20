import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Details() {
  const [book, setBook] = useState(null); // localStorage'dan alınan kitap verisini tutan state

  useEffect(() => {
    const storedData = localStorage.getItem("selectedBook"); // localStorage'dan selectedBook verisini alır
    const storedBook = storedData ? JSON.parse(storedData) : []; // alınan veri parse edilir
    setBook(storedBook); // alınan veri setBook ile state'e alınır
  }, []);

  return (
    <div className="details">
      {/* başlık oluşturuldu */}
      <h1>{book?.volumeInfo?.title}</h1>

      {/* image alındı */}
      {book?.volumeInfo?.imageLinks && (
        <Image
          className="image"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book"
          w="200px"
          h="250px"
          objectFit="cover"
        />
      )}

      {/* yazar verisi alındı */}
      {book?.volumeInfo?.authors && <h3>Author: {book.volumeInfo.authors}</h3>}

      {/* yayımlanan tarih alındı */}
      {book?.volumeInfo?.publishedDate && (
        <div>Published Date: {book.volumeInfo.publishedDate}</div>
      )}

      {/* detay bölümü oluşturuldu */}
      {book?.volumeInfo?.description && <p>{book.volumeInfo.description}</p>}
    </div>
  );
}

export default Details;
