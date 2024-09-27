
import './App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Booking from './Pages/Bookingpage';
import Centers from './Pages/Detailpage';

function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' > <LandingPage /></Route>
        <Route exact path='/bookings' ><Booking /></Route>
        <Route exact path='/centers' ><Centers /></Route>
      </Switch>
    </div>
  );
}

export default App;
