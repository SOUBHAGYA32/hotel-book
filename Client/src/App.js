import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Screen 
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';
import Loginscreen from './Screens/Loginscreen';
import Registerscreen from './Screens/Registerscreen';
import Profilescreen from './Screens/Profilescreen';
import Landingscreen from './Screens/Landingscreen';

//Admin
import Dashboard from './Admin/Dashboard';

//Components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
      <Route path="/home" exact component={Homescreen} />
       <Route path="/book/:roomid/:fromdate/:todate" exact component={Bookingscreen}/>
       <Route path="/login" exact component={Loginscreen}/>
       <Route path="/register" exact component={Registerscreen}/>
       <Route path="/profile" exact component={Profilescreen}/>
       <Route path="/admin" exact component={Dashboard}/>
       <Route path="/" exact component={Landingscreen}/>
     </Router>
  </div>
  );
}

export default App;
