import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Screen 
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';
import Loginscreen from './Screens/Loginscreen';
import Registerscreen from './Screens/Registerscreen';
//Components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
      <Route path="/" exact component={Homescreen} />
       <Route path="/book/:roomid/:fromdate/:todate" exact component={Bookingscreen}/>
       <Route path="/login" exact component={Loginscreen}/>
       <Route path="/register" exact component={Registerscreen}/>
     </Router>
  </div>
  );
}

export default App;
