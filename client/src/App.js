import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './Screens/Home';

function App() {
  return (
      <Router>
        <Route path="/" component={Home} exact />
      </Router>
  );
}

export default App;
