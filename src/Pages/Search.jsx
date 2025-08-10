import { useState } from "react";
import BookCard from "../Components/BookCard";
import { books } from "../data/books";

function Search() {
  const [query, setQuery] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);
  const [openLibraryBooks, setOpenLibraryBooks] = useState([]);

  // Get API key from .env
  const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Books</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find your next favorite book from multiple sources.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Search books, authors, or topics..."
          className="border border-gray-300 rounded-lg p-3 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* Local Books */}
      {filteredBooks.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Local Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </>
      )}

      {/* Google Books Results */}
      {googleBooks.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Google Books Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {googleBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
              >
                {book.volumeInfo?.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-32 h-48 object-cover mb-3"
                  />
                ) : (
                  <div className="w-32 h-48 bg-gray-200 flex items-center justify-center mb-3">
                    No Image
                  </div>
                )}
                <h3 className="text-lg font-semibold text-center">
                  {book.volumeInfo?.title}
                </h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Open Library Results */}
      {openLibraryBooks.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Open Library Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openLibraryBooks.map((book) => (
              <div
                key={book.key}
                className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
              >
                {book.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="w-32 h-48 object-cover mb-3"
                  />
                ) : (
                  <div className="w-32 h-48 bg-gray-200 flex items-center justify-center mb-3">
                    No Image
                  </div>
                )}
                <h3 className="text-lg font-semibold text-center">
                  {book.title}
                </h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
