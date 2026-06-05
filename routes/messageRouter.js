const { Router } = require("express");
const messageRouter = Router();

const { messages } = require("./indexRouter");

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

messageRouter.get("/new", (req, res) => {
  res.render("messageWrite", {
    title: "New Message",
    links: links,
  });
});

messageRouter.post("/new", (req, res) => {
  try {
    const { messageText, messageAuthor } = req.body;

    messages.push({
      text: messageText,
      user: messageAuthor,
      added: new Date(),
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = messageRouter;
