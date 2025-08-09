import { Link } from "react-router";

function BookCard({ id, title, author, description, category, image }) {
  return (
    <Link to={`/book/${id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            alt={title}
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            src={image}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
            }}
          />
        </div>
        <div className="p-4">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap mb-2 text-xs bg-blue-100 text-blue-700">
            {category}
          </span>
          <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-3">by {author}</p>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
