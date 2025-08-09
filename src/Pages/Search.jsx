import { useState } from "react";
import BookCard from "../Components/BookCard";
import { books } from "../data/books";
function Search() {
  const [query, setQuery] = useState("");

  // Simple filter logic
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Books</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find your next favorite book by searching through our curated
          collection of personal growth and development books.
        </p>
      </div>
      <div className="space-y-6">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg w-full transition-all"
            placeholder="Search books, authors, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="justify-center whitespace-nowrap text-sm font-medium transition-all bg-white border shadow-xs hover:bg-blue-50 hover:text-blue-700 h-8 rounded-md gap-1.5 px-3 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-filter h-4 w-4"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span>Filters</span>
            </button>
          </div>
          <p className="text-sm text-gray-600">
            {filteredBooks.length} books found
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
