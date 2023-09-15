import React, { createContext, useContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a custom hook to simplify context usage
export function useMyContext() {
  return useContext(MyContext);
}
export function MyContextProvider({ children }) {
    // Define the state or any data you want to share in the context
    const [myData, setMyData] = useState(false);
  
    // Create any functions or methods to update the state
    const updateMyData = (newData) => {
      setMyData(newData);
    };
  
    return (
      <MyContext.Provider
        value={{
          myData,
          updateMyData,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
  