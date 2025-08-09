function WhyBookForYou() {
  return (
    <>
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Why I Created BookForYou
            </h2>
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-left">
              <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 mb-6 text-lg leading-relaxed text-center">
                  I was tired of spending hours scrolling through endless book
                  recommendations, reading conflicting reviews, and still
                  feeling confused about which book would actually help me grow.
                  So I built this for myself - and for anyone facing the same
                  struggle.
                </p>
                <div class="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 class="text-xl font-semibold text-blue-900 mb-4">
                    The Problems I Faced (Maybe You Do Too):
                  </h3>
                  <ul class="space-y-3 text-blue-800">
                    <li class="flex items-start space-x-3">
                      <span class="text-blue-600 font-bold">•</span>
                      <span>
                        <strong>Information Overload:</strong> Too many options,
                        not enough clarity on what's actually worth reading
                      </span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-blue-600 font-bold">•</span>
                      <span>
                        <strong>Account Fatigue:</strong> Tired of creating
                        accounts just to browse books
                      </span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-blue-600 font-bold">•</span>
                      <span>
                        <strong>No Clear Summaries:</strong> Wanted to
                        understand what I'd learn before committing time to read
                      </span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-blue-600 font-bold">•</span>
                      <span>
                        <strong>Category Confusion:</strong> Books scattered
                        across platforms with unclear categorization
                      </span>
                    </li>
                  </ul>
                </div>
                <p class="text-gray-700 mb-6 text-lg leading-relaxed text-center">
                  <strong>BookForYou</strong> is my solution - built not for
                  profit, but out of genuine frustration with the current book
                  discovery experience. It's a simple, no-signup platform where
                  you can quickly find books that actually matter for your
                  personal growth journey.
                </p>
                <div class="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    What Makes BookForYou Different:
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        Curated selections focused on personal growth, not
                        popularity
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        Clear, concise summaries so you know what you'll gain
                        before you read
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        No signups, no distractions—just a simple, honest book
                        discovery experience
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        Built by a reader, for readers who value their time and
                        growth
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="bg-gray-50 rounded-xl p-6 text-center">
                  <p class="text-gray-700 font-medium text-lg mb-2">
                    "Less time searching, more time growing."
                  </p>
                  <p class="text-gray-600 text-sm">
                    That's not a business slogan - it's a personal mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyBookForYou;
