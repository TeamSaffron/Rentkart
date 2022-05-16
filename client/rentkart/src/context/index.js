import { createContext } from "react";

const RoomDataContext = createContext({
  roomData : {},
  setRoomData: () => {}
})

const UserDataContext = createContext({
  userData: {},
  setUserData: () => {}
})

export {UserDataContext, RoomDataContext};