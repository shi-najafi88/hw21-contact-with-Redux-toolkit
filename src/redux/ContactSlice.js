import { createSlice } from "@reduxjs/toolkit";
import { array } from "yup";

const initialState = {
  contactInfo: [],
  editMood:false,
  deletMood:false,
  deletId:0
};
const ContactSlicer = createSlice({
  name: "contact/redux",
  initialState,

  reducers: {
    SUBMITE: (state, action) => {
        state.contactInfo = action.payload
    },

    EDITICON:(state,action) => {
      state.editMood = true
    },

    DELETMODAL:(state,action) => {
      state.deletMood = true
      state.deletId = action.payload
    },

    NO_MODAL_DELE:(state,action) => {
      state.deletMood = false
    },

    YES_MODAL_DELE:(state,action) => {
      state.contactInfo = action.payload
      state.deletMood = false    //close deletmodal

      //get data on local storage for delet
      let getLocalData = JSON.parse(localStorage.getItem('contact'))
      let localArray = []
      localArray = getLocalData
      const findIndex = localArray.findIndex(item => item.id === state.deletId)
      localArray.splice(findIndex,1)
      localStorage.setItem('contact',JSON.stringify(localArray))
    },

  },
});

export const { SUBMITE , EDITICON , DELETMODAL , NO_MODAL_DELE , YES_MODAL_DELE } = ContactSlicer.actions;
export default ContactSlicer.reducer;
