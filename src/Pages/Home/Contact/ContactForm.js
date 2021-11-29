import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import NavBar from "../../NavBar/NavBar";
function ContactForm() {
  const [state, handleSubmit] = useForm("mpzbalnn");

  return (
    <>
      <NavBar />
      <div style={{ height: "100vh" }}>
        <div style={{ paddingTop: "100px" }}>
          {" "}
          <h3 className="color">Contact Me</h3>
          <p>Have a question or want to work together</p>
        </div>
        <form
          method="POST"
          action="https://formspree.io/f/mpzbalnn"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Your Email"
            className="field"
            id="email"
            type="email"
            name="email"
          />{" "}
          <br /> <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            placeholder="Your Message"
            className="field"
            id="message"
            name="message"
          />{" "}
          <br />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            style={{
              backgroundColor: "#EF620B",
              color: "white",
              width: "220px",
              height: "55px",
              borderRadius:"10px"
            }}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
        {state.succeeded && <p>Thanks for joining!</p>}
      </div>
    </>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
