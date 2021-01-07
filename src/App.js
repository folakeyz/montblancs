import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Props from './components/pages/Properties';
// import Booking from './components/pages/Bookings';
// import  Contact  from './components/pages/Contact';

function App() {
  return (
    <Router>
    <Navbar />
  <Switch>
     <Route path='/' exact component={Home} /> 
       {/* <Route path='/about' exact component={About} /> 
      <Route path='/properties' exact component={Props} /> 
      <Route path='/bookings' exact component={Booking} /> 
      <Route path='/contact' exact component={Contact} />  */}
  
     </Switch>
   </Router>
  );
}

export default App;
