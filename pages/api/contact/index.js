const handler = (req, res) => {
  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const body = req.body.body;

    const message = validateInput(name, email, subject, body);

    if (message) {
      res.status(422).json({
        message: message,
      });
    } else {
      res.status(200).json({
        message: "Email sent successfully!",
      });
    }
  } else if (req.method === "GET") {
    res.status(200).json({
      contact: {
        name: "JJ",
        email: "J@J.com",
        subject: "Jing aorund",
        body: "J way",
      },
    });
  }
};

export default handler;

const validateInput = (name, email, subject, body) => {
  if (!name || name.trim() === "") {
    return "Invalid name";
  } else if (!email || email.trim() === "" || !email.includes("@")) {
    return "Invalid email address";
  } else if (!subject || subject.trim() === "") {
    return "Invalid subject";
  } else if (!body || body.trim() === "") {
    return "Empty body";
  }

  return null;
};
