import type { RootState, AppDispatch } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/booking/booking";
import { Link } from "react-router-dom";
function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.bookingReducer.user);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

        <div className="flex flex-col items-center">
          <div
            className="
            w-28 h-28 
            rounded-full 
            bg-blue-600 
            flex 
            items-center 
            justify-center
            text-white
            text-4xl
            font-bold
          "
          >
            S
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mt-5">
            Sanjar Abdyrahmanov
          </h1>

          <p className="text-gray-500">Frontend Developer</p>
        </div>

        <div className="mt-8 space-y-4">
          <div
            className="
            bg-gray-100
            rounded-xl
            p-4
          "
          >
            <p className="text-sm text-gray-500">Email</p>

            <input
              type="password"
              value={user?.email || ""}
              readOnly
              className="
    bg-transparent
    border-none
    outline-none
    font-semibold
    text-gray-800
    p-0
    w-full
    
  "
            />
          </div>

          <div
            className="
            bg-gray-100
            rounded-xl
            p-4
          "
          >
            <p className="text-sm text-gray-500">Phone</p>

            <input
              type="password"
              value={user?.phone || ""}
              readOnly
              className="
    bg-transparent
    border-none
    outline-none
    font-semibold
    text-gray-800
    p-0
    w-full
    
  "
            />
          </div>

          <div
            className="
            bg-gray-100
            rounded-xl
            p-4
          "
          >
            <p className="text-sm text-gray-500">Password</p>

            <input
              type="password"
              value={user?.password || ""}
              readOnly
              className="
    bg-transparent
    border-none
    outline-none
    font-semibold
    text-gray-800
    p-0
    w-full
    
  "
            />
          </div>
        </div>


        <div className="mt-8 flex gap-3">
          <button
            className="
              flex-1
              bg-blue-600
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Edit
          </button>

          <button
            onClick={() => dispatch(logout())}
            className="
              flex-1
              bg-red-500
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-red-600
              transition
            "
          >
            Logout
          </button>
        </div>
        <div className="text-center font-semibold mt-2.5">
          <Link  to="/">Back</Link>
        </div>
      </div>
     
    </div>
  );
}

export default Profile;
