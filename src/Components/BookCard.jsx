import { Link } from "react-router";

function BookCard({ id, title, author, description, category, image }) {
  return (
    <Link to={`/book/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-xs mx-auto">
        <div className="relative h-48 w-full flex items-center justify-center bg-gray-50">
          <img
            alt={title}
            loading="lazy"
            className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
            src={image}
          />
        </div>
        <div className="p-3">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap mb-2 text-xs bg-blue-100 text-blue-700">
            {category}
          </span>
          <h3 className="font-bold text-base text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-2 text-xs">by {author}</p>
          <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
