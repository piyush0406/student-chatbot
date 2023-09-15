import React from 'react'
import { useMyContext } from '../../context';
import { Fade } from 'react-awesome-reveal';

import './Exit.css'

function Exit() {
  const { myData } = useMyContext();
    console.log("hellohi", myData);

  return (
    <Fade duration={1000}>
        <div className='welcome-container'>
            <div className='exit-title'>Your name <p>{myData.name}</p> aged <p>{myData.age}</p> has been added to student system. You may now exit.</div>
        </div>
    </Fade>
  )
}

export default Exit