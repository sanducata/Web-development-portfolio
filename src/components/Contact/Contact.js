import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import EnvelopeImage from "../../assets/Images/envelope.svg";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import classes from "./contact.module.css";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);
  const [spinner, setSpinner] = useState(null);
  const [button, setIsButton] = useState(
    <button type="submit" value="Send">
      Send
    </button>
  );

  const sendEmail = async (e) => {
    e.preventDefault();

    await setIsPending(!isPending);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

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
          notifySuccess();
          setIsPending(false);
        },
        (error) => {
          console.log(error.text);
          notifyError();
          setIsPending(false);
        }
      );
  };

  useEffect(() => {
    setIsButton(
      isPending ? null : (
        <button type="submit" value="Send">
          Send
        </button>
      )
    );
    setSpinner(
      isPending ? <div className={classes.loadingSpinner}></div> : null
    );
  }, [isPending]);

  const notifySuccess = () => {
    toast.success("Message sent successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notifyError = () => {
    toast.error("An error has occurred.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className={classes.contactContainer} id="Contact">
      <div className={classes.contactTop}>
        <h1>Contact</h1>
        <p>If you want to send me a message just fill out the form below.</p>
        <p className={classes.lastP}>I am happy to hear from you!</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h1 className={classes.formTitle}>
          Let's get in touch!
          <img
            className={classes.envelopeImg}
            src={EnvelopeImage}
            alt="envelopeImage"
          />
        </h1>
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
        />
        {button}
        {spinner}
      </form>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        className={classes.toast}
        toastClassName={classes.toastBody}
      />
    </div>
  );
}

export default Contact;
