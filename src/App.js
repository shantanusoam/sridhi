import React from 'react';
import './App.css';
import Stickbar from './components/Stickbar';
import { BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Home from './pages';



function App() {
  return (
    <Router>
<Stickbar/>
<Switch>
  <Route exact path="/" component={Home} />
</Switch>
   
      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch> */}
    </Router>
  );
}

export default App;
