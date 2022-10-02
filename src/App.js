import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import poke from './poke'
import home from './showPoke'

function App() {



  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element = {home()}/> */}
        <Route path='/' element = { poke()}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
