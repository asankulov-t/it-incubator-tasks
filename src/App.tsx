import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AppTitle from "./components/AppTitle";
import Rating from "./components/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    const [collapse, setCollape]=useState(false )
  return (
    <div className="App">
          <AppTitle title={'page 1'}/>
          <AppTitle title={'my friends'}/>
          <Rating value={3}/>
          <Accordion onClick={()=>setCollape(!collapse)} collapse={collapse} titleValue={'Users'}/>
    </div>
  );
}

export default App;
