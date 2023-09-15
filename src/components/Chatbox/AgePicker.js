import React, { useState } from 'react'

function AgePicker(props) {

const exitMessage = () => {
    if(ageValue!==0){
        props.state.userData.age = ageValue
    }
    if(ageValue!==0){
        props.actions.exitMessage();
    }      
    }

const [ageValue, setAgeValue] = useState("")

let obj = {
    array: []
};
for (var l=17;l<40;l++){
    obj.array[l] = l+1;
}
let optionItems = obj.array.map((item) =>
    <option key={item} value={item}>{item}</option>
);

  return (
    <div className='age-pick-select'>
        <select onChange={e => setAgeValue(e.target.value)}>
            <option></option>
            {optionItems}
        </select>
        <div className='start-btn no-margin' onClick={() => exitMessage()}>Confirm</div>
    </div>
  )
}

export default AgePicker