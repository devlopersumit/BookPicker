function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl md:text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About BookForYou</h1>
      <p className="text-lg text-gray-700 mb-4">
        <span className="font-semibold text-blue-600">BookForYou</span> is a passion project built for lifelong learners, personal growth enthusiasts, and anyone seeking inspiration through books. Our mission is simple: to help you discover your next favorite book for self-improvement, productivity, and financial wisdom.
      </p>
      <p className="text-gray-700 mb-4">
        Unlike typical book sites, BookForYou offers a curated selection focused on quality, not popularity. Each book comes with a clear summary, so you know what you’ll gain before you read. No signups, no ads, no tracking—just a clean, honest book discovery experience.
      </p>
      <p className="text-gray-700 mb-4">
        The site is built using modern React and Tailwind CSS, featuring a responsive design, smooth navigation, and instant search. You can browse by category, search by title or author, and view detailed book information—all in a distraction-free environment.
      </p>
      <div className="bg-blue-50 rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">Why Choose BookForYou?</h2>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-center space-x-2">
            <span className="text-blue-600">✓</span>
            <span>Curated for personal growth and lifelong learning</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-600">✓</span>
            <span>Fast, ad-free, and privacy-focused experience</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-600">✓</span>
            <span>Built by a reader, for readers</span>
          </li>
        </ul>
      </div>
      <p className="text-gray-600 mt-8 text-sm">
        Made with ❤️ by Sumit Jha. Connect on <a href="https://github.com/devlopersumit/BookPicker" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a> or <a href="https://www.linkedin.com/in/sumit-jha" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>.
      </p>
    </div>
  );
}

export default About