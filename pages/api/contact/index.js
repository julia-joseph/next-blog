import {
  getClient,
  getCollection,
  insertCollections,
} from "../../../utils/db-util";

const handler = async (req, res) => {
  let client;

  try {
    client = await getClient();
  } catch (error) {
    res.status(500).json({
      message: "Trouble connecting to MongoDB",
    });
    return;
  }

  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const body = req.body.body;

    const message = validateInput(name, email, subject, body);

    const newContact = {
      name,
      email,
      subject,
      body,
    };

    if (message) {
      res.status(422).json({
        message: message,
        error: "Invalid input",
      });
    } else {
      try {
        const result = await insertCollections(client, "contact", newContact);

        newContact._id = result.insertedId;

        res.status(201).json({
          message: "Email sent successfully!",
          data: newContact,
        });
      } catch (error) {
        res.status(500).json({
          message: "Trouble inserting data to MongoDB",
          error: error,
        });
      }
    }
  } else if (req.method === "GET") {
    try {
      const data = await getCollection(client, "contact", { _id: -1 });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Trouble fetching data from MongoDB",
        error: error,
      });
    }
  }

  client.close();
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
