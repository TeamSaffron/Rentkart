import cors from "cors";
import express, { Router, json } from "express";
// import multer from 'multer'
// import sharp from 'sharp'
import "./db/mongoose.js";
import auth from './middleware/auth.js'
import User from "./models/user.js";
import Room from './models/room.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(json());

app.use(cors({
  origin: 'http://localhost:3000',
}))

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
  // api for filtering rooms
  app.get('/rooms-list',async(req,res)=>{
    try{
      let obj = {}
      if(req.query.rental_price){
          obj.rental_price=req.query.rental_price
      }
      if(req.query.city){
          obj.city=req.query.city
      }
      if(req.query.total_bhk){
          obj.total_bhk=req.query.total_bhk
      }
      if(req.query.furnished){
          obj.furnished=req.query.furnished
      }
      const room =await Room.find(obj)
      if(!room){
          throw new Error()
      }
      res.send(room)
    } catch(e){
      res.status(404).send()
    }
  })

const router = new Router();

app.post('/user', async(req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({
        success: true,
        user: user,
        error: null,
      });
  } catch(error) {
    res.status(404).send({
      success: false,
      error: error.message,
    })
  }
})


app.post('/create-room', auth, async(req, res) => {
  const room = new Room(req.body);
  try {
    await room.save();
    res.status(201).send({
        success: true,
        room: room,
        error: null,
      });
  } catch(error) {
    res.status(404).send({
      success: false,
      error: error.message,
    })
  }
})

app.patch('/update-room/:id', auth, async (req, res) => {
  try {
    const _id = req.params.id;

    const room = await Room.findByIdAndUpdate(_id, req.body, { new: true, runValidators:true })
    if(!room) {
      return res.status(404).send({
        success: false,
        error: "No such room found",
      })
    }
    return res.status(201).send({
      success: true,
      room: room,
      error: null,
    });
  } catch(error) {
    res.status(404).send({
      success: false,
      error: error.message || "Updation failed",
    })
  }
})

// app.post('/user', (req, res) => {
//     const landlord = new User(req.body)

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
