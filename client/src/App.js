import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './Screens/Home/HomePage';
import FindWorkers from './Screens/FindWorkers/FindWorkers';

function App() {
  return (
    <Router>
      <Route path="/" exact><HomePage /></Route>
      <Route path="/worker"><FindWorkers/></Route>
    </Router>
  );
}

export default App;
