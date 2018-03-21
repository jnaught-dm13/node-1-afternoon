const express = require("express");
const { json } = require("body-parser");
const messageController = require("./Controllers/message_controller");
const baseURL = "/api/messages";

const app = express();
app.use(json());

const port = 3000;

app.get(baseURL, messageController.read);
app.put(`${baseURL}/:id`, messageController.update);
app.post(baseURL, messageController.create);
app.delete(`${baseURL}/:id`, messageController.delete);

app.listen(port, () => {
  console.log("I'm Listening on port", port);
});
