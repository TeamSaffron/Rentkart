import React, { useContext } from 'react'
import { RoomDataContext } from '../context'
import InputField from './InputField'
import '../styles/_form.scss';

export default function RoomForm({ operationType }) {
  const {roomData, setRoomData} = useContext(RoomDataContext);

  const RoomFormAttributes = [
    {
      label: "Room Title",
      value: roomData.name,
      tagType: "input",
    },
    {
      label: "City",
      value: roomData.city,
      tagType: "input",
    },
    {
      label: "Rental Price",
      value: roomData.rental_price,
      tagType: "input",
    },
    {
      label: "Furnished",
      value: roomData.furnished,
      tagType: "input",
    },
    {
      label: "No of rooms",
      value: roomData.total_bhk,
      tagType: "input",
    },
    {
      label: "Security Deposit",
      value: roomData.security_deposit,
      tagType: "input",
    },
    {
      label: "Address",
      value: roomData.address,
      tagType: "text-area",
    },
    {
      label: "Contact No",
      value: roomData.landlord_contact_no,
      tagType: "input",
    }
  ]

  return (
    <div className='room-form'>
      <h1 className='room-form__heading'>Room {operationType} form</h1>
      <div className='room-form__container'>
        <form className='room-form__container--form'>
          <table className='form-table'>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Field</th>
              </tr>
            </thead>
            <tbody>
            {RoomFormAttributes.map((field)=> 
            <tr className='form-table__row'>
              <td className='form-table__row--label'>{field.label}</td>
              <td ><InputField value={field.value} tagType={field.tagType} inputFieldClass='form-table__row--input'/></td>
            </tr>
            )}
            </tbody>
          </table>
        </form>
        <button className='room-form__container--submit_btn'>
          Save Room
        </button>
      </div>
    </div>
  )
}
