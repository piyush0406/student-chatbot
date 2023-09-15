import React,{Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import 'react-chatbot-kit/build/main.css';
import { MyContextProvider } from './context.js';

import './App.css'

import Home from "./components/Home/Home";

class App extends Component {

  constructor() {
      super();
      this.state = { game_selected: null };
  }

  render(){
    return(
      //add your component to this by Route path = "/{component name}"   
      <MyContextProvider>   
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </MyContextProvider>


    );
  }
}

export default App;