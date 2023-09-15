import React from 'react';

import { createClientMessage } from 'react-chatbot-kit';
import { useMyContext } from '../../context';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // eslint-disable-next-line no-unused-vars
  const { _, updateMyData } = useMyContext();

    const initialAction = () => {
        const clientMessage = createClientMessage('Got it!')
        updateState(clientMessage)
        const message = createChatBotMessage('Pick a slot!' , {
          widget:'modalPick',
        })
        updateState(message)
    }

  const validName = () => {
    const message = createChatBotMessage('Enter a valid name!');
    updateState(message, "name")
  }

  const slotSelectMessage = () => {
    const clientMessage = createClientMessage(children?.props?.children?.props?.state?.userData?.slot);
      updateState(clientMessage)
      const message = createChatBotMessage('Enter your Name');
      updateState(message, "name")
      } 

  const afterSlotMessage = () => {
    const message = createChatBotMessage('Enter your Name');
    updateState(message, "name")
    }

  const afterNameMessage = () => {
    const message = createChatBotMessage("Enter your Age", {
      widget:'agePick'
    })
    updateState(message, "age")
    }
  
  const validAge = () => {
    const message = createChatBotMessage('Enter a valid age between 18-40');
    updateState(message, "age")
  }

  const exitMessage = () => {
      const clientMessage = createClientMessage(children?.props?.children?.props?.state?.userData?.age)
        updateState(clientMessage)
      let message = createChatBotMessage("Thank you. In 5 seconds, bot will exit")
      updateState(message)
      message = createChatBotMessage("5", {
        delay: 1000
      })
      updateState(message)
      message = createChatBotMessage("4", {
        delay: 2000
      })
      updateState(message)
      message = createChatBotMessage("3", {
        delay: 3000
      })
      updateState(message)
      message = createChatBotMessage("2", {
        delay: 4000
      })
      updateState(message)
      message = createChatBotMessage("1", {
        delay: 5000
      })
      updateState(message)
      setTimeout(()=> updateMyData(children.props.children.props.state.userData),7000)     
    }

      
    const updateState = (message, checker= " ",) => {
        setState((prev) => ({
            ...prev,
            messages:[...prev.messages, message],
            checker
        }))
    }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            slotSelectMessage,
            validAge,
            validName,
            afterSlotMessage,
            afterNameMessage,
            exitMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;