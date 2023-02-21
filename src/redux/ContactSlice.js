import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactInfo: [],
};
const ContactSlicer = createSlice({
  name: "contact/redux",
  initialState,

  reducers: {
    SUBMITE: (state, action) => {
        state.contactInfo = action.payload
      const setLocal = (info) => {
        localStorage.setItem("contact", JSON.stringify(info));
      };
      setLocal(action.payload);
      console.log(state.contactInfo);
    },
  },
});
export const { SUBMITE } = ContactSlicer.actions;
export default ContactSlicer.reducer;
