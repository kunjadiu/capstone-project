import React, { useReducer } from "react";
import BookingTable from "./BookingTable";
import BookingForm from "./BookingForm";
import About from "./About";
import ERROR404 from "./404";
import { useState } from "react";

import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import Highlights from "./Highlights";
import HomePage from "./Homepage";
import ConfirmedBooking from "./ConfirmedBooking";
function Main() {
  //   const [availableTimes, setAvailableTimes] = useReducer(
  //     updateTimes,
  //     initializeTimes
  //   );
  //   function initializeTimes() {
  //     return ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
  //   }
  //   function updateTimes() {
  //     return initializeTimes();
  //   }
  //   console.log(setAvailableTimes);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [noOfGuests, setNoOfGuests] = useState();
  const [occasion, setOccasion] = useState("");
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    // return result;
    for (let i = 14; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const intialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, intialState);

  function updateTimes(state, data) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Menu" element={<Highlights />}></Route>
        <Route
          path="/Reservations"
          element={
            <BookingTable
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              noOfGuests={noOfGuests}
              setNoOfGuests={setNoOfGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={state}
              dispatch={dispatch}
              // submitAPI={submitAPI}
            />
          }
        ></Route>
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking date={date} time={time} noOfGuests={noOfGuests} occasion={occasion}/>}></Route>
        <Route path="/Order-Online" element={<ERROR404/>}></Route>
        <Route path="/Login" element={<ERROR404/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;
