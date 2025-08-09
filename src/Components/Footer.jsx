function Footer() {
  return (
    <>
      <footer class="bg-gray-900 text-white py-12 px-4">
        <div class="container mx-auto text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
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
              class="lucide lucide-book-open h-6 w-6"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span class="text-xl font-bold">FindYourBook</span>
          </div>
          <p class="text-gray-400 mb-2">
            A passion project to help you discover your next favorite book for
            personal growth.
          </p>
          <p class="text-gray-500 text-sm mb-4">
            Built with ❤️ by someone who understands your book discovery
            struggles.
          </p>
          <p class="text-xs text-gray-600">
            © 2024 FindYourBook. Free forever, no ads, no tracking - just books.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer
