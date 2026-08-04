import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 mt-12.5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-red-600">
              MovieHub
            </h2>

            <p className="mt-4 leading-7">
              Discover the latest movies, explore detailed information,
              and save your favorite films in one place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-red-500 duration-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/favorites" className="hover:text-red-500 duration-300">
                  Favorites
                </Link>
              </li>

              <li>
                <Link to="/movies" className="hover:text-red-500 duration-300">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Popular Genres
            </h3>

            <ul className="space-y-3">
              <li>🎬 Action</li>
              <li>😂 Comedy</li>
              <li>👻 Horror</li>
              <li>🚀 Sci-Fi</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3">
              <p>📧 moviehub@gmail.com</p>
              <p>📞 +996 555 123 456</p>
              <p>📍 Bishkek, Kyrgyzstan</p>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p>
            © 2026 MovieHub. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#" className="hover:text-red-500 duration-300">
              Instagram
            </a>

            <a href="#" className="hover:text-red-500 duration-300">
              YouTube
            </a>

            <a href="#" className="hover:text-red-500 duration-300">
              Discord
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;