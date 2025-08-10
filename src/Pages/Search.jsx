import { useState } from "react";
import BookCard from "../Components/BookCard";
import { books } from "../data/books";

function Search() {
  const [query, setQuery] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);
  const [openLibraryBooks, setOpenLibraryBooks] = useState([]);

  const GOOGLE_BOOKS_API_KEY = "AIzaSyC6tpNvCrQvcMLhsd23M2i7F_kpVkk_sr4";

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      // Google Books API
      const googleRes = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&key=${GOOGLE_BOOKS_API_KEY}`
      );
      const googleData = await googleRes.json();
      setGoogleBooks(googleData.items || []);

      // Open Library API
      const openLibRes = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const openLibData = await openLibRes.json();
      setOpenLibraryBooks(openLibData.docs || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const getGoogleThumbnail = (info) => {
    if (!info.imageLinks) return "";
    const url = info.imageLinks.thumbnail || info.imageLinks.smallThumbnail;
    return url?.replace("http://", "https://");
  };

  const getOpenLibraryCover = (coverId) => {
    return coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
      : "";
  };

  const Card = ({ img, title, author }) => (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200">
      {img ? (
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover rounded-md mb-3"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm">
          No Cover
        </div>
      )}
      <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-1">{author}</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Books</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Search through our curated collection and explore results from
          multiple sources.
        </p>
      </div>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="mb-8">
        <input
          className="pl-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg w-full transition-all"
          placeholder="Search books, authors, or topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* Local Results */}
      {filteredBooks.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Local Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </>
      )}

      {/* Google Books Results */}
      {googleBooks.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Google Books Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {googleBooks.map((book) => {
              const info = book.volumeInfo || {};
              return (
                <Card
                  key={book.id}
                  img={getGoogleThumbnail(info)}
                  title={info.title}
                  author={info.authors?.join(", ") || "Unknown Author"}
                />
              );
            })}
          </div>
        </>
      )}

      {/* Open Library Results */}
      {openLibraryBooks.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Open Library Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {openLibraryBooks.map((book) => (
              <Card
                key={book.key}
                img={getOpenLibraryCover(book.cover_i)}
                title={book.title}
                author={book.author_name?.join(", ") || "Unknown Author"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
