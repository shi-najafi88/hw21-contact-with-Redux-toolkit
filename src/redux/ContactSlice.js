import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactInfo: [],
  editMood:false,
  deletMood:false,
  valueId:0  
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
      state.valueId = action.payload 
    },

    EDIT_CONTACT:(state,action) => {

      state.contactInfo = action.payload
      
      let newObj = {}
      let getLocalData = JSON.parse(localStorage.getItem('contact'))
      const findIndex = getLocalData.findIndex(item => item.id === state.valueId)
     
      getLocalData.map(item => { 
        if(item.id === state.valueId){
          
          item.name = state.contactInfo.name
          item.lastName = state.contactInfo.lastName
          item.email = state.contactInfo.email
          item.selfRelative = state.contactInfo.relation

          newObj = {name:item.name,lastName:item.lastName, email:item.email,selfRelative:item.selfRelative }
        }
        return
      })
      getLocalData.splice(findIndex,1,newObj)
      localStorage.setItem('contact',JSON.stringify(getLocalData))
    },

    DELETMODAL:(state,action) => {
      state.deletMood = true
      state.valueId = action.payload
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
      const findIndex = localArray.findIndex(item => item.id === state.valueId)
      localArray.splice(findIndex,1)
      localStorage.setItem('contact',JSON.stringify(localArray))
    },

  },
});

export const { SUBMITE , EDITICON , DELETMODAL , NO_MODAL_DELE , YES_MODAL_DELE, EDIT_CONTACT} = ContactSlicer.actions;
export default ContactSlicer.reducer;
