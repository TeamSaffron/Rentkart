import express, { Router, json } from "express";
const app = express();
import auth from './middleware/auth.js'
import multer from 'multer'
import sharp from 'sharp'
import "./db/mongoose.js";
import User from "./models/user.js";
const port = process.env.PORT || 3001;

app.use(json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken()
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken()
    res.send({user, token});
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

app.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();

    if (!req.user) {
      return res.status(404).send();
    }
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
