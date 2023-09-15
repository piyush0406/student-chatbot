import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit'

import './Home.css'

import config from '../Chatbox/config'
import MessageParser from '../Chatbox/MessageParser'
import ActionProvider from '../Chatbox/ActionProvider'
import Welcome from '../Welcome/Welcome'
import Exit from '../Exit/Exit'
import { Zoom } from 'react-awesome-reveal'
import { useMyContext } from '../../context';


const  Home=()=> {
  const [chatbotFlag,setChatbotFlag]=useState(false)
  // const [exitFlag,setExitFlag]=useState(false)
  const { myData } = useMyContext();

  const toggleFlag=()=>{
    setChatbotFlag(!chatbotFlag);
  }

  // const setExit=(msg)=>{
  //   setExitFlag(msg)
  // }

  return (
    
    <div className='home-page'>
      {!chatbotFlag && <Welcome toggleFlag={toggleFlag}/>  }    
     { chatbotFlag && !myData &&<div className='chatbot-main' id='chatbot' >
        <Zoom direction='left' duration={700}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            // setExit={setExit}
          />
        </Zoom>
      </div>}
       {myData && <Exit/>}
    </div>
  )
}

export default Home