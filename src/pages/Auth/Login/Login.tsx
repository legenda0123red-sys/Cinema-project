import { Link, useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../../../app/store";
import type { Message } from "../../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { useState,  } from "react";
import { loginUser } from "../../../features/booking/booking";
function Login(){
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
    const [message, setMessage] = useState<Message>({
      text: "",
      color: "",
    });
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('')
  const data = useSelector((state: RootState) => state.bookingReducer.databasa)

   const showMessage = (text: string, color: string) => {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, 2500);
  };

  function dataLogin(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const userData = data.find((el) => el.email === email && el.password === password);

    if (!userData) {
      showMessage('Ошибка, неверный пароль или email', 'red');
      return
    }

    dispatch(loginUser(userData))
    showMessage('Successful!', 'green');
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }
    return(
        <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Login
    </h1>

    <form className="space-y-5" onSubmit={dataLogin}>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>

        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="
            w-full px-4 py-3
            border border-gray-300
            rounded-xl
            outline-none
            focus:ring-2 focus:ring-blue-500
            focus:border-blue-500
          "
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>

        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="
            w-full px-4 py-3
            border border-gray-300
            rounded-xl
            outline-none
            focus:ring-2 focus:ring-blue-500
            focus:border-blue-500
          "
        />
      </div>


      <button
        className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-blue-700
          transition
        "
      >
        Login
      </button>

    </form>
    <p className="text-center mt-2.5 font-semibold text-lg" style={{color: message.color}}>{message.text}</p>

    <p className="text-center text-gray-600 mt-6">
      Don't have an account?
      <span className="text-blue-600 cursor-pointer ml-1 hover:underline">
       <Link to='/register'> Register</Link>
      </span>
    </p>

  </div>
</div>
        </>
    )
}
export default Login