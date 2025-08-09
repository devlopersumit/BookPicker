import { useParams } from "react-router";
import BookCard from "../Components/BookCard";
import { books } from "../data/books";

function CategoryBooks() {
  const { category } = useParams();
  const filteredBooks = books.filter(
    (book) => book.category.replace(/\s+/g, "-").toLowerCase() === category
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">
        {category.replace(/-/g, " ")} Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} {...book} />)
        ) : (
          <p className="text-gray-600">No books found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryBooks;
