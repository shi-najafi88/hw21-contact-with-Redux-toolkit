import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactInfo: [],
  editMood:false
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

    EDITICON:(state,action) => {
      state.editMood = true
    }

  },
});
export const { SUBMITE , EDITICON } = ContactSlicer.actions;
export default ContactSlicer.reducer;
