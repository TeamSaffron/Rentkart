import express, { Router, json } from 'express';
import Room from "./models/room.js";
import './db/mongoose.js';
//import Rooms from './models/room.js';
import User from './models/user.js';

const app = express()
const port = process.env.PORT || 3001


app.use(json())

  // api for filtering rooms
  app.get('/get-rooms',async(req,res)=>{
    try{
      let { page, size, sort } = req.query;
        let obj = {}
        if(req.query.rental_price){
            obj.rental_price={$lte:req.query.rental_price}
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
        if (!page) {
          page = 1;
        }
        if(!size) {
          size = 10;
        }
        const limit = parseInt(size);
        const room =await Room.find(obj).sort({ votes: 1, _id: 1 }).limit(limit)
        if(!room){
            throw new Error()
        }
        res.send({
          page,
          size,
          Info: room,
        })
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
  }catch(error) {
    res.status(404).send({
      success: false,
      error: error.message,
    })
  }
})


app.post('/create-room', async(req, res) => {
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

app.patch('/update-room/:id', async (req, res) => {
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

//     landlord.save().then(() => {
//         res.status(201).send(landlord)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

// app.post('/Tenants', (req, res) => {
//     const tenant = new User(req.body)

//     tenant.save().then(() => {
//         res.status(201).send(tenant)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id

//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)

//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})