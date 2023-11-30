import React from "react";
import { useState } from "react";
function BookingForm(props) {
  const handleChange = (e) => {
    props.setDate(e);
    props.dispatch(e);
  };
  function handleSubmit(event) {
    props.submitAPI();
    // alert('Booking Confirmed!!')
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
  }
  return (
    <div
      style={{
        background: "rgba(73, 94, 87, 1)",
        display: "flex",
        justifyContent: "center",
        fontFamily: "karla",
        color: "white",
      }}
    >
      {}
      <form
      onSubmit={handleSubmit}
        style={{
          display: "grid",
          maxWidth: "400px",
          gap: "20px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <h4 style={{ color: "#f4ce14" }}>Find a Table For Any Occasion</h4>
        <label for="res-date">Choose date:</label>
        <input
          type="date"
          id="res-date"
          value={props.date}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          required
        />
        {/* {date} */}
        {/* <h1>{date}</h1> */}
        <label for="res-time">Choose time</label>
        {/* {props.time} */}
        <select
          id="res-time "
          value={props.time}
          onChange={(e) => {
            props.setTime(e.target.value);
          }}
          
          required
        >
          <option disabled selected  value={''}>Select the time</option>
          {/* <option></option> */}
          {props.availableTimes.availableTimes.map((time) => {
            {
              return <option key={time}>{time}</option>;
            }
          })}
        </select>
        {/* {time} */}
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1-15"
          min="1"
          max="15"
          id="guests"
          value={props.noOfGuests}
          onChange={(e) => {
            props.setNoOfGuests(e.target.value);
          }}
          required
        />
        {/* {noOfGuests} */}
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          value={props.occasion}
          onChange={(e) => {
            props.setOccasion(e.target.value);
          }}
          required
        >
          <option disabled selected  value={''}>Select the occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {/* {occasion} */}
        <input  type="submit" value="Make Your Reservation" id="reserveTableButton"/>
        {/* </input> */}
      </form>
    </div>
  );
}

export default BookingForm;
