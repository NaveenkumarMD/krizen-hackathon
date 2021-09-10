import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './Screens/Home';
import Searchworkers from './Screens/Searchworkers';

import Addskills from './Screens/Add skills';
import Jobsrecieved from './Screens/Jobsrecieved';

function App() {
  return (
      <Router>
      
        <Route path="/Searchworkers" component={Searchworkers}  />
        <Route path="/Addskills" component={Addskills}  />
        <Route path="/Jobsrecieved" component={Jobsrecieved}  />
        <Route path="/" exact><HomePage /></Route>
      <Route path="/worker"><FindWorkers/></Route>
      </Router>
  );
}

export default App;
