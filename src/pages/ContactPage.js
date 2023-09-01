import "../styles/contact-page.css";

import {
  TextField,
  Autocomplete,
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
  styled,
  Button,
} from "@mui/material";

import { PrimaryColor, BodyColor, BackgroundShade } from "../constants/colors";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    fieldset: {
      borderRadius: "0.6rem",
    },
    "&:hover fieldset": {
      borderColor: "#1c1e53",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5E3BEE",
    },
  },
});

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    max-width: 99%;
    min-width: 99%;
    min-height: 10rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.4rem;
    color: black;   
    background-color: ${BackgroundShade};
    border: 1px solid black; 
    border-color: #B2BAC2;
    &:hover {
      border-color: ${BodyColor};
    }  
    &:focus {
      border-color: ${PrimaryColor};
    }  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

function CustomTextField({ label, id, placeholder }) {
  return (
    <div style={{ width: "50%", fontFamily: "Roboto" }}>
      <label for={id}>{label}</label>
      <CssTextField
        variant="outlined"
        id={id}
        sx={{ width: "100%", marginTop: "0.4rem" }}
        placeholder={placeholder}
      />
    </div>
  );
}

const contactReasonOptions = [
  { label: "Job Offer", value: 1 },
  { label: "Buisness Enquiry", value: 2 },
  { label: "Feedback", value: 3 },
  { label: "Complaint", value: 4 },
];

function ContactPage() {
  return (
    <div className="page-container">
      <div className="contact-page">
        <p>Get In Touch</p>
        <p>Contact me</p>
        <p>
          Send me a message by filling your details below and writing your
          message
        </p>
        <form className="contact-me-form">
          <div>
            <CustomTextField
              label="First name"
              id="first-name"
              placeholder="Enter your first name"
            />
            <CustomTextField
              label="Last name"
              id="last-name"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <CustomTextField
              label="Email"
              id="email"
              placeholder="Enter your email address"
            />
            <CustomTextField
              label="Phone number"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label for="message-topic">Choose a topic</label>
            <Autocomplete
              disablePortal
              id="message-topic"
              options={contactReasonOptions}
              sx={{ width: "100%", marginTop: "0.4rem" }}
              renderInput={(params) => <CssTextField {...params} />}
            />
          </div>

          <div style={{ width: "70%", overflow: "hidden" }}>
            <label for="message">Message</label>
            <StyledTextarea id="message" sx={{ marginTop: "0.4rem" }} />
          </div>

          <div>
            <FormControlLabel
              sx={{ fontFamily: "Roboto" }}
              required
              control={<Checkbox />}
              label="I accept the terms"
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: PrimaryColor }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
