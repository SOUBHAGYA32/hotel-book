import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Screen 
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';

//Components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
      <Route path="/" exact component={Homescreen} />
       <Route path="/book/:roomid" exact component={Bookingscreen}/>
     </Router>
  </div>
  );
}

export default App;
