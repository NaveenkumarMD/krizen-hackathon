import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './Screens/Home';
import Searchworkers from './Screens/Searchworkers';

import Addskills from './Screens/Add skills';
import Jobsrecieved from './Screens/Jobsrecieved';
import HomePage from './Screens/Home/HomePage';
import Findworkers from './Screens/FindWorkers/FindWorkers'
function App() {
  return (
      <Router>      
        <Route path="/Searchworkers" component={Searchworkers}  />
        <Route path="/Addskills" component={Addskills}  />
        <Route path="/Jobsrecieved" component={Jobsrecieved}  />
        <Route path="/" exact component={HomePage}/>
      <Route path="/worker" component={Findworkers}/>
      </Router>
  );
}

export default App;
