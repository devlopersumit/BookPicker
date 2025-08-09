import { useState } from "react";
import BookCard from "../Components/BookCard";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Tiny changes, remarkable results. Learn how to build good habits and break bad ones.",
    category: "Productivity",
    image:
      "https://thefioneers.com/wp-content/uploads/2021/05/AtomicHabits_1book-792x1024.png",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    category: "Finance",
    image:
      "https://penerbitbaca.com/wp-content/uploads/2023/10/The-Psychology-of-Money.jpg",
  },
  {
    id: 3,
    title: "Mindset",
    author: "Carol Dweck",
    description:
      "The new psychology of success and how we can learn to fulfill our potential.",
    category: "Personal Growth",
    image:
      "https://blog.cdn.level.game/2023/06/Mindset-Carol-S.Dweck-Buy-Online-Bookbins-1.png",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    category: "Productivity",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/2/JN/OT/TH/147304712/whatsapp-image-2022-02-11-at-3-26-48-pm-500x500.jpeg",
  },
  {
    id: 5,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    description: "Powerful lessons in personal change and effectiveness.",
    category: "Personal Growth",
    image:
      "https://cdn.kobo.com/book-images/8cacc164-4797-47d4-a845-9fe06fbe44fd/1200/1200/False/the-7-habits-of-highly-effective-people-infographics-edition.jpg",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description:
      "What the rich teach their kids about money that the poor and middle class do not.",
    category: "Finance",
    image: "https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg",
  },
  {
    id: 7,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description:
      "A guide to spiritual enlightenment and living in the present moment.",
    category: "Personal Growth",
    image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg",
  },
  {
    id: 8,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description:
      "Explores the two systems that drive the way we think and make choices.",
    category: "Psychology",
    image:
      "https://jonlieffmd.com/wp-content/uploads/2011/12/thinking-fast-slow-350x428.png",
  },
  {
    id: 9,
    title: "Make Your Bed",
    author: "Admiral William H. McRaven",
    description:
      "Little things that can change your life... and maybe the world.",
    category: "Motivation",
    image:
      "https://www.madrasshoppe.com/59310-large_default/make-your-bed-william-h-mcraven.jpg",
  },
  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A counterintuitive approach to living a good life.",
    category: "Personal Growth",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: 11,
    title: "Start With Why",
    author: "Simon Sinek",
    description: "How great leaders inspire everyone to take action.",
    category: "Leadership",
    image: "https://m.media-amazon.com/images/I/81N7FmJhbhL.jpg",
  },
  {
    id: 12,
    title: "Grit",
    author: "Angela Duckworth",
    description: "The power of passion and perseverance.",
    category: "Motivation",
    image:
      "https://cawood.com/wp-content/uploads/2018/03/SimonSchuster_Grit.jpg",
  },
  {
    id: 13,
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master your mind and defy the odds.",
    category: "Motivation",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*tGbIU9fugXuyfbY1wTgmDw.png",
  },
  {
    id: 14,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    description: "A practical guide to personal freedom.",
    category: "Personal Growth",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
  },
  {
    id: 15,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A journey of self-discovery and following your dreams.",
    category: "Fiction",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 16,
    title: "The Lean Startup",
    author: "Eric Ries",
    description:
      "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
    category: "Business",
    image: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
  },
  {
    id: 17,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A classic exploration of finding purpose through adversity.",
    category: "Philosophy",
    image:
      "https://wizelit.com/content/images/size/w750/2023/05/Man-s-Search-for-Meaning.jpg",
  },
  {
    id: 18,
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about the transformative power of education.",
    category: "Memoir",
    image: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
  },
  {
    id: 19,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind.",
    category: "History",
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
  },
  {
    id: 20,
    title: "Thinking in Bets",
    author: "Annie Duke",
    description: "Making smarter decisions when you don't have all the facts.",
    category: "Decision Making",
    image:
      "https://fifthperson.com/wp-content/uploads/2022/09/thinking-in-bets.png",
  },
];

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
