import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registr from "./pages/Auth/Registr/Registr";
import Login from "./pages/Auth/Login/Login";
import Favorites from "./pages/Favorites/Favorites";
import Profile from "./pages/Profile/Profile";
import OneCard from "./pages/OneCard/OneCard";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <>
      <div className=" max-w-350 m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registr />} />
          <Route path="/register/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/movie/:id" element={<OneCard />}/>
          <Route path="/favorites/movie/:id" element={<OneCard />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </>
  );
}
export default App;
