const Hero = () => {
  return (
    <>
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your next
            <span className="text-blue-600 block">Growth Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find the perfect books for personal growth, productivity, finance,
            and self-improvement. No account needed - just pure book discovery.
          </p>
          <div class="relative max-w-md mx-auto mb-12">
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
              class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 bg-transparent px-3 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-full"
              placeholder="Search books, authors, or topics..."
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="bg-blue-100 p-3 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open text-blue-600"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <span className="text-base font-semibold text-gray-700">
                Curated Book Picks
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-green-100 p-3 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles text-green-600"
                >
                  <path d="M12 3v2"></path>
                  <path d="M12 19v2"></path>
                  <path d="M3 12h2"></path>
                  <path d="M19 12h2"></path>
                  <path d="M5.6 5.6l1.4 1.4"></path>
                  <path d="M17 17l1.4 1.4"></path>
                  <path d="M17 7l1.4-1.4"></path>
                  <path d="M7 17l-1.4 1.4"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span className="text-base font-semibold text-gray-700">
                Grow Every Day
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-yellow-100 p-3 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smile text-yellow-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 15s1.5 2 4 2 4-2 4-2"></path>
                  <path d="M9 9h.01"></path>
                  <path d="M15 9h.01"></path>
                </svg>
              </span>
              <span className="text-base font-semibold text-gray-700">
                Enjoy the Process
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
