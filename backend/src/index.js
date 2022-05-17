import express, { Router, json } from 'express';
import Room from "./models/room.js";
import './db/mongoose.js';
import User from './models/user.js';

const app = express()
const port = process.env.PORT || 3001


app.use(json())

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

//GET...to read data per room
app.get('/all-rooms', (req, res) => {
  Room.find({}).then((rooms) => {
      res.send(rooms)
  }).catch((e) => {
      res.status(500).send(e)
  })
})
//GET individual room data using id....

app.get('/room/:id', (req, res) => {
  const _id = req.params.id

  Room.findById(_id).then((room) => {
      if (!room) {
          return res.status(404).send()
      }

      res.send(room)
  }).catch((e) => {
      res.status(500).send(e)
  })
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