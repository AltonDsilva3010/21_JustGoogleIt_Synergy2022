import React, { useState } from "react";
import "./DashBoard.css";
import StarImage from "../images/starpng2.png";
import CinemaSeat from "../images/Cinema_Seat_png.png";
import UpcomingEvents from "./UpcomingEvents";

function DashBoard() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="dashboard-container">
      <UpcomingEvents />
    </div>
  );
}

export default DashBoard;
