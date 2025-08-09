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
  {
    id: 21,
    title: "Outliers",
    author: "Malcolm Gladwell",
    description:
      "The story of success and what makes high-achievers different.",
    category: "Success",
    image: "https://m.media-amazon.com/images/I/81vpsIs58WL.jpg",
  },
  {
    id: 22,
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    description: "Shortcuts and errors in our thinking and how to avoid them.",
    category: "Psychology",
    image: "https://cdn.waterstones.com/bookjackets/large/9781/4447/9781444759563.jpg",
  },
  {
    id: 23,
    title: "The Miracle Morning",
    author: "Hal Elrod",
    description: "Transform your life before 8AM.",
    category: "Productivity",
    image: "https://readersbooksclub.com/wp-content/uploads/2022/10/6027a0c20f124ca5dac633e4_The-Miracle-Morning.jpg",
  },
  {
    id: 24,
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    description: "Timeless principles for building relationships and success.",
    category: "Self Help",
    image: "https://readersbooksclub.com/wp-content/uploads/2022/12/how-to-win-friends-_-influence-people.png",
  },
  {
    id: 25,
    title: "The Compound Effect",
    author: "Darren Hardy",
    description: "Jumpstart your income, your life, your success.",
    category: "Success",
    image: "https://miro.medium.com/v2/resize:fit:1000/1*OF8-dgRjv5bcXk7E6MqXow.jpeg",
  },
  {
    id: 26,
    title: "Essentialism",
    author: "Greg McKeown",
    description: "The disciplined pursuit of less.",
    category: "Productivity",
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
  },
  {
    id: 27,
    title: "The One Thing",
    author: "Gary Keller",
    description: "The surprisingly simple truth behind extraordinary results.",
    category: "Productivity",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: 28,
    title: "Quiet",
    author: "Susan Cain",
    description: "The power of introverts in a world that can't stop talking.",
    category: "Psychology",
    image: "https://www.libertybooks.com/image/cache/Quiet-The-Power-of-Introverts-in-a-World-That-Cant-Stop-Talking-640x996.jpg?q6",
  },
  {
    id: 29,
    title: "The Happiness Project",
    author: "Gretchen Rubin",
    description:
      "Or, why I spent a year trying to sing in the morning, clean my closets, fight right, read Aristotle, and generally have more fun.",
    category: "Happiness",
    image: "https://media1.popsugar-assets.com/files/thumbor/tZYdtsr7_4RbhB59yU0sF8Iy218/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2019/12/27/833/n/1922729/9267a805e89c37de_Screen_Shot_2019-12-27_at_2.00.10_PM/i/Happiness-Project.png",
  },
  {
    id: 30,
    title: "Daring Greatly",
    author: "Brené Brown",
    description:
      "How the courage to be vulnerable transforms the way we live, love, parent, and lead.",
    category: "Personal Growth",
    image: "https://is4-ssl.mzstatic.com/image/thumb/Publication113/v4/c7/61/d6/c761d6fd-30f8-eabc-c093-5644b0d6a391/9781101594995.d.jpg/1200x630wz.png",
  },
  {
    id: 31,
    title: "The War of Art",
    author: "Steven Pressfield",
    description:
      "Break through the blocks and win your inner creative battles.",
    category: "Creativity",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: 32,
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    description:
      "Let go of who you think you're supposed to be and embrace who you are.",
    category: "Personal Growth",
    image: "https://www.familyhopecenter.com/wp-content/uploads/2021/12/the-gifts-of-imperfection-front.jpg",
  },
  {
    id: 33,
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    description:
      "Acquire the secrets of success and achieve everything you've always wanted.",
    category: "Success",
    image: "https://www.narodabook.com/wp-content/uploads/2024/08/Buy-The-Magic-of-Thinking-Big-David-Schwartz-english-book-online-2024.png",
  },
  {
    id: 34,
    title: "Awaken the Giant Within",
    author: "Tony Robbins",
    description:
      "How to take immediate control of your mental, emotional, physical and financial destiny!",
    category: "Motivation",
    image: "https://www.samuelthomasdavies.com/wp-content/uploads/2018/06/Awaken-the-Giant-Within.png",
  },
  {
    id: 35,
    title: "The 5 Second Rule",
    author: "Mel Robbins",
    description:
      "Transform your life, work, and confidence with everyday courage.",
    category: "Motivation",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/39/bc/b2/39bcb2ec-ae6f-5184-d1c4-840f1102b3e0/9781682612392.jpg/1200x630wz.png",
  },
  {
    id: 36,
    title: "The Success Principles",
    author: "Jack Canfield",
    description: "How to get from where you are to where you want to be.",
    category: "Success",
    image: "https://vajehandish.com/wp-content/uploads/2020/09/the-success-principles2-768x768.jpg",
  },
  {
    id: 37,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    description: "Why we do what we do in life and business.",
    category: "Productivity",
    image: "https://gyaanstore.com/cdn/shop/files/81_2a821c7e-10d2-4d35-85bf-93f368823284.png?v=1701795884&width=1445",
  },
  {
    id: 38,
    title: "Originals",
    author: "Adam Grant",
    description: "How non-conformists move the world.",
    category: "Creativity",
    image: "https://i.pinimg.com/736x/c6/88/e8/c688e8425cbf99fbfcf06e46a3a96000.jpg",
  },
  {
    id: 39,
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    description:
      "A fable about fulfilling your dreams and reaching your destiny.",
    category: "Personal Growth",
    image: "https://res.cloudinary.com/sharooq/image/upload/v1660411806/Blog/2208_1/the-monk-who-sold-his-ferrari_nenujq.png",
  },
  {
    id: 40,
    title: "Eat That Frog!",
    author: "Brian Tracy",
    description:
      "21 great ways to stop procrastinating and get more done in less time.",
    category: "Productivity",
    image: "https://brockrjohnson.com/wp-content/uploads/2022/12/06-books-eat-that-frog.jpg",
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
