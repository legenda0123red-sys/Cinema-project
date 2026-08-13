import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { closeModal } from "./model/buyticketSlice";

function BuyTickets() {
  const isOpen = useSelector((state: RootState) => state.buyTicketReducer.openW);
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-md mx-4 max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl animate-modalIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Заголовок</h2>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="text-sm text-gray-600">Содержимое модалки</div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => dispatch(closeModal())}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Отмена
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BuyTickets;
