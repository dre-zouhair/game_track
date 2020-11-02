import './App.css';
import './Leagues'
import Teams from "./Teams";
import Leagues from "./Leagues";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import League from "./League";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/leagues'} className="nav-link"> Leagues </Link></li>
                        <li><Link to={'/teams'} className="nav-link">teams</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route path='/leagues' component={Leagues} />
                    <Route exact path='/teams' component={Teams} />
                </Switch>
            </div>
        </Router>

    </div>
  );
}

export default App;
