import Header from "../../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import type { MouseEvent } from "react";
import { useState } from "react";
import { addDataBasa } from "../../../features/booking/booking";
import type { Message, RegistrForm } from "../../../types/types";
import type { AppDispatch } from "../../../app/store";
import { useDispatch } from "react-redux";

function Registr() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState<Message>({
    text: "",
    color: "",
  });
  const [data, setData] = useState<RegistrForm>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const showMessage = (text: string, color: string) => {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, 2500);
  };

  const Add = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!data.email || !data.name || !data.password || !data.phone) {
      showMessage("Error, inputs are empty", "red");
      return;
    }

    if (!data.email.includes("@")) {
      showMessage("Error, you forget to write gmail", "red");
      return;
    }

    if (data.password.trim().length < 6) {
      showMessage("Error, pass is lower then six symbols", "red");
      return;
    }
    if (data.phone.trim().length < 10) {
      showMessage("Error, phone number is too short", "red");
      return;
    }

    if (!/^\+?\d+$/.test(data.phone)) {
      showMessage("Error, phone must contain only numbers", "red");
      return;
    }

    const userData: RegistrForm = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    dispatch(addDataBasa(userData));
    setTimeout(() => {
      navigate("/register/login");
    }, 2000);
    showMessage("Succesful!", "green");
    setData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <>
      <Header />
      <div className=" min-h-screen bg-zinc-950 flex items-center justify-center px-4 mt-12.5 rounded-lg">
        <div
          className="
        w-full 
        max-w-md 
        bg-zinc-900 
        rounded-2xl 
        p-8 
        shadow-xl
    "
        >
          <h1
            className="
            text-3xl 
            font-bold 
            text-white 
            text-center 
            mb-8
        "
          >
            Регистрация
          </h1>

          <form className="space-y-5">
            <div>
              <label
                className="
                    text-zinc-300 
                    text-sm
                    block
                    mb-2
                "
              >
                Имя
              </label>

              <input
                value={data.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
                type="text"
                placeholder="Введите имя"
                className="
                        w-full
                        bg-zinc-800
                        text-white
                        px-4
                        py-3
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-red-600
                        transition
                    "
              />
            </div>

            <div>
              <label
                className="
                    text-zinc-300 
                    text-sm
                    block
                    mb-2
                "
              >
                Номер телефона
              </label>

              <input
                value={data.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value,
                  })
                }
                type="text"
                placeholder="Введите номер телефона"
                className="
                        w-full
                        bg-zinc-800
                        text-white
                        px-4
                        py-3
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-red-600
                        transition
                    "
              />
            </div>

            <div>
              <label
                className="
                    text-zinc-300 
                    text-sm
                    block
                    mb-2
                "
              >
                Email
              </label>

              <input
                value={data.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                type="email"
                placeholder="Введите email"
                className="
                        w-full
                        bg-zinc-800
                        text-white
                        px-4
                        py-3
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-red-600
                        transition
                    "
              />
            </div>

            <div>
              <label
                className="
                    text-zinc-300 
                    text-sm
                    block
                    mb-2
                "
              >
                Пароль
              </label>

              <input
                value={data.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                type="password"
                placeholder="Введите пароль"
                className="
                        w-full
                        bg-zinc-800
                        text-white
                        px-4
                        py-3
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-red-600
                        transition
                    "
              />
            </div>
            <p
              className="text-center text-lg font-semibold"
              style={{ color: message.color }}
            >
              {message.text}
            </p>
            <button
              onClick={Add}
              className="
                    w-full
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-semibold
                    py-3
                    rounded-xl
                    transition
                "
            >
              Создать аккаунт
            </button>
          </form>

          <p
            className="
            text-zinc-400
            text-center
            mt-6
        "
          >
            Уже есть аккаунт?
            <span
              className="
                text-red-500
                ml-2
                cursor-pointer
                hover:text-red-400
            "
            >
              <Link to="login">Войти</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Registr;
