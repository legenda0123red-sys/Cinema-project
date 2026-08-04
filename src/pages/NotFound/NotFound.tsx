import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="container">
        <div className="info text-center">
          <h1 className="text-9xl font-bold ">404</h1>
          <hr />
          <div className="text">
            <h2 className="text-3xl font-bold" >Страница не найдена</h2>
            <p className="text-2xl flex gap-5 justify-center">
              К сожеление, такой страницы нет, пожалуйста вернитесь на
              <span><Link to="/">главная</Link></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
