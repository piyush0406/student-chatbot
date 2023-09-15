import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from './StartBtn';
import Sample from '../Sample/Sample';
import AgePicker from './AgePicker';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget:'startBtn'
  })],
  state: {
    checker: null,
    userData: {
        name: "",
        age: 0,
        slot: "",
    }
},
  botName:"Ratham Chatbot",
  widgets:[
    {
        widgetName: 'startBtn',
        widgetFunc: (props) => <StartBtn { ...props} />
    },
    {
      widgetName: 'modalPick',
      widgetFunc: (props) => <Sample{ ...props} />
    },
    {
      widgetName: 'agePick',
      widgetFunc: (props) => <AgePicker{ ...props} />
    }
]
};

export default config;