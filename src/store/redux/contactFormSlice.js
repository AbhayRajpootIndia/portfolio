import { createSlice } from "@reduxjs/toolkit";

export const contactReasonOptions = [
  "Job Offer",
  "Buisness Enquiry",
  "Feedback",
  "Complaint",
];

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: contactReasonOptions[0],
    message: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload.lastName;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
    },
    setTopic: (state, action) => {
      state.topic = action.payload.topic;
    },
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    resetAll: (state, action) => {
      state.firstName = "";
    },
  },
});

export const setFirstName = contactFormSlice.actions.setFirstName;
export const setLastName = contactFormSlice.actions.setLastName;
export const setEmail = contactFormSlice.actions.setEmail;
export const setPhoneNumber = contactFormSlice.actions.setPhoneNumber;
export const setTopic = contactFormSlice.actions.setTopic;
export const setMessage = contactFormSlice.actions.setMessage;
export const resetAll = contactFormSlice.actions.resetAll;

export default contactFormSlice.reducer;
