import { Link } from "react-router";

function NotSure() {
  return (
    <>
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Where to Start?
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              I've curated these paths based on the most common growth goals.
              Pick what resonates with you right now.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock h-8 w-8 text-blue-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                "I want to build better habits"
              </h3>
              <p class="text-gray-600 mb-6">
                Start with the fundamentals of habit formation and productivity
                systems that actually work.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    Atomic Habits by James Clear
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    The Power of Habit by Charles Duhigg
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    Deep Work by Cal Newport
                  </span>
                </div>
              </div>
              <a
                href="/category/productivity"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 bg-blue-600 text-white shadow hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 h-9 px-4 py-2 w-full"
              >
                Explore Productivity Books
              </a>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="bg-yellow-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-dollar-sign h-8 w-8 text-yellow-600"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                "I want to understand money better"
              </h3>
              <p class="text-gray-600 mb-6">
                Learn the psychology and principles behind building wealth and
                making smart financial decisions.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    The Psychology of Money by Morgan Housel
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    Rich Dad Poor Dad by Robert Kiyosaki
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    The Intelligent Investor by Benjamin Graham
                  </span>
                </div>
              </div>
              <a
                href="/category/finance"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 bg-yellow-500 text-white shadow hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-9 px-4 py-2 w-full"
              >
                Explore Finance Books
              </a>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trending-up h-8 w-8 text-green-600"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                "I want to grow as a person"
              </h3>
              <p class="text-gray-600 mb-6">
                Develop self-awareness, emotional intelligence, and the mindset
                needed for continuous growth.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    Mindset by Carol Dweck
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    The 7 Habits by Stephen Covey
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span class="text-sm text-gray-700">
                    Emotional Intelligence by Daniel Goleman
                  </span>
                </div>
              </div>
              <a
                href="/category/personal-growth"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 bg-green-600 text-white shadow hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 h-9 px-4 py-2 w-full"
              >
                Explore Personal Growth Books
              </a>
            </div>
          </div>
          <div class="text-center mt-12">
            <p class="text-gray-600 mb-6">
              Still not sure? Browse all categories to find what speaks to you.
            </p>
            <Link
              to="/categories"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 bg-gray-900 text-white shadow hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 h-10 rounded-md px-6"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotSure;
