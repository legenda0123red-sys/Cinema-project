import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-zinc-950 text-white shadow-lg p-5 rounded-lg ">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <h1 className="text-3xl font-bold tracking-wide text-red-500">
      Cinematixs
    </h1> 

    <nav>
      <ul className="flex gap-8 text-zinc-300">
        <li className="cursor-pointer hover:text-white transition">
          <Link to='/'>Home</Link>
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Films
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Animes
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Drama
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Fantastic
        </li>
        <li className="cursor-pointer hover:text-white transition">
            <Link to='/favorites'>Favorites</Link>
        </li>
        <li className="cursor-pointer hover:text-white transition">
         <Link to='/profile'> Profile</Link>
        </li>
      </ul>
    </nav>

    <div className="flex gap-4">
      <Link
        to="/register/login"
        className="px-5 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
      >
        Войти
      </Link>

      <Link
        to="/register"
        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300"
      >
        Регистрация
      </Link>
    </div>

  </div>
</header>
    </>
  );
}
export default Header;
