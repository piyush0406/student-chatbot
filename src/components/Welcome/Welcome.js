import React from 'react'

import './Welcome.css'
import { Fade, Slide } from 'react-awesome-reveal'

function Welcome(props) {

  return (
    <div className='welcome-container'>
        <Fade duration={200}>
            <div className='welcome-title'><Fade cascade duration={70}>Enter into Student Info System</Fade></div>
        </Fade>
        <Slide direction='up'> 
            <div className='welcome-btn-container'>
                <div className='welcome-btn' onClick={props.toggleFlag}>
                    Enroll Now!
                </div>
            </div>
        </Slide>        
        
    </div>
  )
}

export default Welcome