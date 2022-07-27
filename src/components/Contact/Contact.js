import emailjs from "@emailjs/browser";
import { useRef } from "react";

import classes from "./contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eqb5wx2",
        "template_d55bxbl",
        form.current,
        "FaLNIlAW2BVq_0xRA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.contactContainer} id="Contact">
      <div className={classes.contactLeft}>
        <h1>Contact</h1>
        <p>If you want to send me a message just fill out the form below.</p>
        <p className={classes.lastP}>I am happy to hear from you!</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h1 className={classes.formTitle}>
          Let's get in touch!
          <img
            className={classes.envelopeImg}
            src="http://localhost:3000/Images/envelope.svg"
            alt="envelopeImage"
          />
        </h1>

        <input type="text" name="user_name" placeholder="Your name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
        />
        <textarea name="message" placeholder="Message" />
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
