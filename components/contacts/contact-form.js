import { useRef } from "react";
import classes from "../../../styles/contact-form.module.css";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const bodyRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const body = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      body: bodyRef.current.value,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(console.log);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <h3>Contact Me! </h3>
        <p>
          For any questions, clarifications or even for a quick hello, please
          fill in the form below to get in touch!
        </p>
        <div className={classes.controllers}>
          <div className={classes.controller}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              ref={nameRef}
            />
          </div>
          <div className={classes.controller}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              ref={emailRef}
            />
          </div>
        </div>
        <div className={classes.controllers}>
          <div className={classes.full__span__controller}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject here"
              ref={subjectRef}
            />
          </div>
        </div>
        <div className={classes.controllers}>
          <div className={classes.full__span__controller}>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              placeholder="Enter details here"
              rows="10"
              ref={bodyRef}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
