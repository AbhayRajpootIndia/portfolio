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
import {
  contactReasonOptions,
  setMessage,
} from "../store/redux/contactFormSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setTopic,
} from "../store/redux/contactFormSlice";

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

function CustomTextField({ label, value, onChange, id, placeholder }) {
  return (
    <div style={{ width: "50%", fontFamily: "Roboto" }}>
      <label htmlFor={id}>{label}</label>
      <CssTextField
        value={value}
        onChange={onChange || null}
        variant="outlined"
        id={id}
        sx={{ width: "100%", marginTop: "0.4rem" }}
        placeholder={placeholder}
      />
    </div>
  );
}

function ContactPage() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.contactForm.firstName);
  const lastName = useSelector((state) => state.contactForm.lastName);
  const email = useSelector((state) => state.contactForm.email);
  const phoneNumber = useSelector((state) => state.contactForm.phoneNumber);
  const topic = useSelector((state) => state.contactForm.topic);
  const message = useSelector((state) => state.contactForm.message);

  const onSubmit = () => {
    alert("Thanks for the message!");
  };

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
              value={firstName}
              onChange={(event) =>
                dispatch(setFirstName({ firstName: event.target.value }))
              }
              id="first-name"
              placeholder="Enter your first name"
            />
            <CustomTextField
              label="Last name"
              value={lastName}
              onChange={(event) =>
                dispatch(setLastName({ lastName: event.target.value }))
              }
              id="last-name"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <CustomTextField
              label="Email"
              value={email}
              onChange={(event) =>
                dispatch(setEmail({ email: event.target.value }))
              }
              id="email"
              placeholder="Enter your email address"
            />
            <CustomTextField
              label="Phone number"
              value={phoneNumber}
              onChange={(event) =>
                dispatch(setPhoneNumber({ phoneNumber: event.target.value }))
              }
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="message-topic">Choose a topic</label>
            <Autocomplete
              disablePortal
              value={topic}
              onChange={(event, newValue) =>
                dispatch(setTopic({ topic: newValue }))
              }
              id="message-topic"
              options={contactReasonOptions}
              sx={{ width: "100%", marginTop: "0.4rem" }}
              renderInput={(params) => <CssTextField {...params} />}
            />
          </div>

          <div style={{ width: "70%", overflow: "hidden" }}>
            <label htmlFor="message">Message</label>
            <StyledTextarea
              value={message}
              onChange={(event) =>
                dispatch(setMessage({ message: event.target.value }))
              }
              id="message"
              sx={{ marginTop: "0.4rem" }}
            />
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
            onClick={onSubmit}
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
