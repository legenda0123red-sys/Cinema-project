import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RegistrForm } from "../../types/types";

interface RegistrData {
  databasa: RegistrForm[];
  user: RegistrForm | null;
}

const initialState: RegistrData = {
  databasa: [],
  user: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addDataBasa(state, action: PayloadAction<RegistrForm>) {
      state.databasa.push(action.payload);
    },

    loginUser(state, action: PayloadAction<RegistrForm>) {
      state.user = action.payload;
    },

    logout(state) {
      state.user = null;
    },
  },
});

export const { addDataBasa, loginUser, logout } = bookingSlice.actions;
export default bookingSlice.reducer;