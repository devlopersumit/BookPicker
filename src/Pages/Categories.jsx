import { Link } from "react-router";

function Categories() {
  return (
    <>
      <div class="container mx-auto px-4 pt-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated categories to find books that match
            your interests and goals.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/category/personal-growth" class="group">
            <div class=" rounded-xl p-8 border-2 bg-green-100 text-green-700 border-green-200 hover:shadow-xl transition-all duration-300 h-full">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 rounded-full  text-green-700 bg-green-200 group-hover:scale-110 transition-transform">
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
                    class="lucide lucide-trending-up h-6 w-6"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">
                    Personal Growth
                  </h3>
                  <p class="text-sm text-gray-500">24 books</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Books to help you develop personally and reach your full
                potential
              </p>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full group-hover:bg-gray-50"
              >
                Explore Personal Growth
              </button>
            </div>
          </a>
          <a href="/category/productivity" class="group">
            <div class=" rounded-xl p-8 border-2 bg-blue-100 text-blue-700 border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 rounded-full text-blue-700 bg-blue-200 group-hover:scale-110 transition-transform">
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
                    class="lucide lucide-clock h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Productivity</h3>
                  <p class="text-sm text-gray-500">18 books</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Master your time, focus, and efficiency with proven systems
              </p>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full group-hover:bg-gray-50"
              >
                Explore Productivity
              </button>
            </div>
          </a>
          <a href="/category/finance" class="group">
            <div class=" rounded-xl p-8 border-2 bg-yellow-100 text-yellow-700 border-yellow-200 hover:shadow-xl transition-all duration-300 h-full">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 rounded-full text-yellow-700 bg-yellow-200 group-hover:scale-110 transition-transform">
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
                    class="lucide lucide-dollar-sign h-6 w-6"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Finance</h3>
                  <p class="text-sm text-gray-500">15 books</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Build wealth, understand money, and make smart financial
                decisions
              </p>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full group-hover:bg-gray-50"
              >
                Explore Finance
              </button>
            </div>
          </a>
          <a href="/category/psychology" class="group">
            <div class=" rounded-xl p-8 border-2 bg-purple-100 text-purple-700 border-purple-200 hover:shadow-xl transition-all duration-300 h-full">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 rounded-full text-purple-700 bg-purple-200 group-hover:scale-110 transition-transform">
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
                    class="lucide lucide-brain h-6 w-6"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Psychology</h3>
                  <p class="text-sm text-gray-500">12 books</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Understand the mind, behavior, and human psychology
              </p>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full group-hover:bg-gray-50"
              >
                Explore Psychology
              </button>
            </div>
          </a>
          <a href="/category/self-help" class="group">
            <div class=" rounded-xl p-8 border-2 bg-pink-100 text-pink-700 border-pink-200 hover:shadow-xl transition-all duration-300 h-full">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 rounded-full text-pink-700 bg-pink-200 group-hover:scale-110 transition-transform">
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
                    class="lucide lucide-heart h-6 w-6"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Self-Help</h3>
                  <p class="text-sm text-gray-500">20 books</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Practical advice for improving your life and wellbeing
              </p>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full group-hover:bg-gray-50"
              >
                Explore Self-Help
              </button>
            </div>
          </a>
          <a href="/category/leadership" class="group">
            <div class=" rounded-xl p-8 border-2 bg-indigo-100 text-indigo-700 border-indigo-200 hover:shadow-xl transition-all duration-300 h-full">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 rounded-full text-indigo-700 bg-indigo-200 group-hover:scale-110 transition-transform">
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
                    class="lucide lucide-users h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Leadership</h3>
                  <p class="text-sm text-gray-500">10 books</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Develop leadership skills and learn to inspire others
              </p>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full group-hover:bg-gray-50"
              >
                Explore Leadership
              </button>
            </div>
          </a>
        </div>
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our search feature to find books by title, author, or topic.
          </p>
          <Link
            to="/search"
            className="inline-flex items-center justify-center gap-2 text-base font-semibold rounded-md px-6 py-3 bg-blue-600 text-white shadow transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search All Books
          </Link>
        </div>
      </div>
    </>
  );
}
export default Categories;
