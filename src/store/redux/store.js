import { configureStore } from "@reduxjs/toolkit";

import contactFormReducer from "./contactFormSlice";

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
  },
});
