const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "New Message",
    href: "/new",
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    links: links,
  });
});

indexRouter.get("/message/:id", (req, res, next) => {
  try {
    const messageId = req.params.id;
    const specificMessage = messages[messageId];

    if (!specificMessage) {
      throw new Error("The message cannot find!");
    }

    res.render("messageOpen", {
      title: "Message Detailed",
      msg: specificMessage,
      links: links,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { indexRouter, messages };
