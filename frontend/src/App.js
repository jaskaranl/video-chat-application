import './App.css';
import {Routes,Route}from 'react-router-dom'
import Screen from './components/Screen.jsx';
import Lobby from './components/Lobby.jsx';
import Aipage from './components/Aipage.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
   <div className="App">
   <Navbar/>
   <Routes>
      <Route path="/" element={ <Lobby/>}/>
      <Route path="/room/:roomid" element={ <Screen/>}/>
      <Route path="/bot" element={ <Aipage/>}/>
    </Routes>
   </div>
  )


}

export default App;
