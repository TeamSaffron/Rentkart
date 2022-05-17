import { Router } from "express";
import Room from "../models/room";

const router = new Router();

router.post('/create-room', async(req, res) => {
  const room = new Room(req.body);
  try {
    await room.save();
    res.status(201).send({
        success: true,
        error: null,
      });
  } catch(error) {
    res.status(404).send({
      success: false,
      error: "failed",
    })
  }
})

router.patch('/update-room/:id', async (req, res) => {
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
      error: null,
    });
  } catch(error) {
    res.status(404).send({
      success: false,
      error: error || "Updation failed",
    })
  }
})