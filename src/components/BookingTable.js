import React from "react";
import BookingForm from "./BookingForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
function BookingTable(props) {
  const navigate = useNavigate();
  const submitAPI = function () {
    navigate("/ConfirmedBooking");
  };
  useEffect(() => {
    document.title = "Reservations";
  });
  return (
    <>
      <BookingForm
        date={props.date}
        setDate={props.setDate}
        time={props.time}
        setTime={props.setTime}
        noOfGuests={props.noOfGuests}
        setNoOfGuests={props.setNoOfGuests}
        occasion={props.occasion}
        setOccasion={props.setOccasion}
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitAPI={submitAPI}
      />
    </>
  );
}

export default BookingTable;
