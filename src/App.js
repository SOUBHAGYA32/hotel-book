import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Screen 
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';
import Loginscreen from './Screens/Loginscreen';
import Registerscreen from './Screens/Registerscreen';
import Profilescreen from './Screens/Profilescreen';

//Admin
import Dashboard from './Admin/Dashboard';

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
       <Route path="/profile" exact component={Profilescreen}/>
       <Route path="/admin" exact component={Dashboard}/>
     </Router>
  </div>
  );
}

export default App;
