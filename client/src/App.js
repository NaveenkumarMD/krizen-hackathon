import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './Screens/Home/HomePage';

function App() {
  return (
    <Router>
      <Route path="/" exact><HomePage /></Route>
    </Router>
  );
}

export default App;
