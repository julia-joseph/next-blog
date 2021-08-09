import classes from "../../../styles/contact-form.module.css";

const ContactForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <h3>Contact Me! </h3>
      <p>
        For any questions, clarifications or even for a quick hello, please fill
        in the form below to get in touch!
      </p>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.controllers}>
          <div className={classes.controller}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
            ></input>
          </div>
          <div className={classes.controller}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
            ></input>
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
            ></input>
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
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
