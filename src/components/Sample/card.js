import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import moment from 'moment'

import './card.css'
 
function CardMonth({ itemId, selected, onClick, date,day, title }) {
  const visibility = useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick()}
      role="button"
      style={{
        border: "2px solid #00ADB5",
        display: "inline-block",
        margin: "0 10px",
        width: "8rem",
        userSelect: "none",
        backgroundColor: selected ? "#00ADB5" : "white",
        color: selected ? "white" : "#00ADB5"
      }}
      tabIndex={0}
      className="card-month-container"
    >
        <div className="card-month">
            <div className="card-month-date">{date}</div>
            <div className="card-month-day">{day}</div>
        </div>
      {/* <div> */}
        {/* <div>{title}</div> */}
        {/* <div
          style={{
            backgroundColor: visible ? "transparent" : "gray",
          }}
        >
          visible: {JSON.stringify(visible)}
        </div> */}
        {/* <div>selected: {JSON.stringify(!!selected)}</div> */}
      {/* </div> */}
      {/* <div
        className="card-month"
        style={{
          backgroundColor: selected ? "#00ADB5" : "white",
        }}
      /> */}
    </div>
  );
}

function CardTime({ itemId, selected, onClick, title }) {
    const visibility = useContext(VisibilityContext);
  
    const visible = visibility.isItemVisible(itemId);


  
    return (
      <div
        onClick={() => onClick()}
        style={{
          border: "2px solid #00ADB5",
          display: "inline-block",
          margin: "0 10px",
          width: "5rem",
          userSelect: "none",
          backgroundColor: selected ? "#00ADB5" : "white",
          color: selected ? "white" : "#00ADB5"
        }}
        tabIndex={0}
        className="card-time-container"
      >
        <div className="card-time">
            <div className="card-time-text">{itemId.format("h:mm A")}</div>
        </div>
        {/* <div>
          <div>{title}</div>
          <div
            style={{
              backgroundColor: visible ? "transparent" : "gray",
            }}
          >
            visible: {JSON.stringify(visible)}
          </div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div
          style={{
            backgroundColor: selected ? "green" : "bisque",
            height: "200px",
          }}
        /> */}
      </div>
    );
  }

  export {CardTime, CardMonth}