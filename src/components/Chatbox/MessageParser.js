import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  const parse = (message) => {
    // console.log(message);
    if (checker === "slot") {
      actions.afterSlotMessage();
      }
    if (checker === "name" && String(message) && !Number(message)) {
      actions.afterNameMessage();
      children.props.state.userData.name = message;
      }else if(checker === "name" && !(String(message) && !Number(message))){
        actions.validName();
      }
    if (checker === "age" && Number(message) && Number(message)>=18 && Number(message)<=40) {
      actions.exitMessage()
      children.props.state.userData.age = message;
      console.log("pagal",children.props.state.userData);
      }else if(checker === "age" &&!( Number(message) && Number(message)>=18 && Number(message)<=40)){
        actions.validAge()
      }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;