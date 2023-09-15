import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./arrows";
import {CardMonth, CardTime } from "./card";

import moment from 'moment'
import { Fade } from "react-awesome-reveal";

const today = moment();

const getItems=()=>{
  const timestamp=[]
  const start=moment(today).startOf("day")
  while(start<moment(today).add(7,"day")){
    timestamp.push(start.unix())
    start.add(1,"day")
  }
  console.log({timestamp});
  return timestamp
}

let morningTimeSlots = [];
let afternoonTimeSlots = [];
let eveningTimeSlots = [];

const setSlots=(time)=>{
  morningTimeSlots = [];
 afternoonTimeSlots = [];
 eveningTimeSlots = [];
  let today=moment(time*1000)
  let startTime = moment(today).set("hour",9);
  let endTime =  moment(today).set("hour",12);
  console.log({startTime});
  while (startTime.isBefore(endTime)) {
  if(startTime>=today)
  morningTimeSlots.push(moment(startTime)); 
  startTime.add(1, 'hour'); 
}
 startTime =  moment(today).set("hour",12)
 endTime =  moment(today).set("hour",18)
  while (startTime.isBefore(endTime)) {
  if(startTime>=today)
  afternoonTimeSlots.push(moment(startTime)); 
  startTime.add(1, 'hour'); 
}
startTime = moment(today).set("hour",18)
endTime =  moment(today).set("hour",21)
 while (startTime.isBefore(endTime)) {
 if(startTime>=today)
 eveningTimeSlots.push(moment(startTime)); 
 startTime.add(1, 'hour'); 
}

}

function Sample(props) {


  const slotSelectMessage = () => {
    props.actions.slotSelectMessage();
  }    


  const [items] = useState(getItems);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleItemClickMonth = (itemId) => () => {
    setSlots(itemId)
    console.log({morningTimeSlots,eveningTimeSlots,afternoonTimeSlots});
    setSelectedMonth(itemId)
    console.log({itemId});
  };

  const handleItemClickTime = (itemId) => () => {
    setSelectedTime(itemId);
    props.state.userData.slot = moment(itemId).format("Do MMMM YYYY, h:mm A")
    console.log("userbc",props.state.userData.slot );
  }

  return (
    <div className="">
      <div className="time-slot-container">
        <div>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
            {items.map((id) => (
              <CardMonth
                title={id}
                itemId={id}
                key={id}
                onClick={handleItemClickMonth(id)}
                selected={id === selectedMonth}
                date={moment(id*1000).format('DD MMM')}
                day={moment(id*1000).format('ddd')}

              />
            ))}
          </ScrollMenu>          
          {selectedMonth &&<><Fade>
          <div className="time-card-header">Morning:</div>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
            {morningTimeSlots.map( id  => (
              <CardTime
                title={id}
                itemId={id}
                key={id}
                onClick={handleItemClickTime(id)}
                selected={id === selectedTime}
                
              />
            ))}
          </ScrollMenu>
          <div className="time-card-header">Afternoon:</div>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
            {afternoonTimeSlots.map( id  => (
              <CardTime
                title={id}
                itemId={id}
                key={id}
                onClick={handleItemClickTime(id)}
                selected={id === selectedTime}

              />
            ))}
          </ScrollMenu>
          <div className="time-card-header">Evening:</div>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
            {eveningTimeSlots.map( id  => (
              <CardTime
                title={id}
                itemId={id}
                key={id}
                onClick={handleItemClickTime(id)}
                selected={id === selectedTime}

              />
            ))}
          </ScrollMenu></Fade></>}
        </div>
      </div>
      <div className='start-btn' onClick={() => slotSelectMessage()}>Confirm</div>
    </div>
  );
}

function onWheel(apiObj, ev) {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default Sample
