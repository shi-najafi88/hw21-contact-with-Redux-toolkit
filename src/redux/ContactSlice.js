import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // disabled:false,

}
const ContactSlicer = createSlice({
    name:'contact/redux',
    initialState,
    reducers: {

    }
})
export const {CHANGE} =ContactSlicer.actions
export default ContactSlicer.reducer