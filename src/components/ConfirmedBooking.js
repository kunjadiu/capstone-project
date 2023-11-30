import React from "react";

function ConfirmedBooking(props) {
  return (
    <div
      class="container"
      style={{ backgroundColor: "#495e57", color: "#f4ce14",fontFamily:'karla'}}
    >
      <h1><blink>Your Booking has been confirmed!</blink></h1>
      <div style={{fontSize:'2rem',fontFamily:'karla'}}>
        Your Date of Reservation :- {props.date}
        <br />
        Time:- {props.time}
        <br />
        No of guests:-{props.noOfGuests}
        <br />
        Occasion:- {props.occasion}
        <br />
      </div>
    </div>
  );
}

export default ConfirmedBooking;
