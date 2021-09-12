import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './Screens/Home';
import Searchworkers from './Screens/Searchworkers';

import Addskills from './Screens/Add skills';
import Jobsrecieved from './Screens/Jobsrecieved';
import HomePage from './Screens/Home/HomePage';
import Findworkers from './Screens/FindWorkers/FindWorkers';
import Signinworkers from './Screens/Signinworker';
import Loginworker from './Screens/Loginworker';
import UserSignup from './Screens/Usersignup';
import UserLogin from './Screens/Userlogin';

function App() {
  return (
      <Router>      
        <Route path="/Searchworkers" component={Searchworkers}  />
        <Route path="/Addskills" component={Addskills}  />
        <Route path="/Jobsrecieved" component={Jobsrecieved}  />
        <Route path="/Signup-worker" component={Signinworkers}/>
        <Route path="/Login-worker" component={Loginworker} />
        <Route path="/User-login" component={UserLogin} />
        <Route path="/User-signup" component={UserSignup} />
        <Route path="/" exact component={HomePage}/>
      <Route path="/worker" component={Findworkers}/>
      </Router>
  );
}

export default App;
