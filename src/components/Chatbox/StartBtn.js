import React from 'react'

function StartBtn(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }
  return (
    <div>
        <div className='start-btn' onClick={() => initialAction()}>Got it!</div>
    </div>
  )
}

export default StartBtn