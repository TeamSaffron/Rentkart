import { SET_ROOM_DATA, SET_ROOM_LIST, SET_ROOM_PAGE_NUMBER, SET_ROOM_TOTAL_COUNT } from '../action';

export const initialState = {
  roomData: {
    name : "",
    city: "",
    rental_price: 0,
    nearby_amenities: [],
    address: "",
    description: "",
    total_bhk: 1,
    landlord_id: "",
    tenant_ids: [],
    room_photos: [],
    furnished: "",
    security_deposit: "",
  },
  pageNumber: 1,
  totalCount: 0,
  roomList: [],
};

const roomReducer = (state= initialState, actions) => {
  switch(actions.type) {
    case SET_ROOM_DATA: 
      return {
        ...state,
        roomData: actions.payload,
      };
    case SET_ROOM_LIST: 
      return {
        ...state,
        roomList: actions.payload,
      };
    case SET_ROOM_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: actions.payload,
      };
    case SET_ROOM_TOTAL_COUNT:
      return {
        ...state,
        totalCount: actions.payload,
      }   
    default : 
      return state;
  }
}

export default roomReducer;