import './App.css';
import './Leagues'
import Teams from "./Teams";
import Leagues from "./Leagues";
import  LeagueDetails from './LeagueDetails';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TeamDetails from "./TeamDetails";
import {useState} from "react";

const FilterId = React.createContext();

function App() {
    const videogames = [
        { id: "codmw", name: "Call of Duty" },
        { id: "csgo", name: "CS:GO" },
        { id: "dota2", name: "Dota2" },
        { id: "lol", name: "League of Legends" },
        { id: "pubg", name: "PUBG" },
        { id: "ow", name: "Overwatch" },
        { id: "rl", name: "Rocket League" },
        { id: "r6siege", name: "Rainbow Six Siege" },
        { id: "fifa", name: "FIFA" },
        { id: null, name: "All videogames" },
    ];
    const [data,setData] = useState({
        svLabel:" All videogames",
        Id:""
    });
    const setSelected =  (id) => {
      videogames.map(v => {
            if (v.id === id ){
                setData({
                    svLabel: v.name,
                    Id : v.id
                })
            }
        });
    }
    const handleCollapseToggle = (e) => {
        const content = document.querySelector(e.currentTarget.getAttribute("data-target"));
        content.classList.toggle("show");
    };
  return (
    <div className="App">
        <Router>
            <FilterId.Provider value={{
                data,setData
            }} >
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <button className="btn btn-link nav-link dropdown-toggle" data-target="#navbarDropdown" onClick={(e) => handleCollapseToggle(e)}>
                                    {data.svLabel}
                                </button>
                                <div className="dropdown-menu" id="navbarDropdown">
                                    <div className="dropdown-item" >
                                        All videogames
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    {videogames.map(
                                        (videogame, i) =>
                                            videogame.id && (
                                                <div key={i} className="dropdown-item" onClick={() => setSelected(videogame.id)}>
                                                    {videogame.name}
                                                </div>
                                            )
                                    )}
                                </div>
                            </li>
                            <li><Link to={'/leagues'} className="nav-link"> Leagues </Link></li>
                            <li><Link to={'/teams'} className="nav-link">teams</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/leagues' >
                            <Leagues>

                            </Leagues>
                        </Route>
                        <Route path='/leagues/:Id' component={LeagueDetails} />
                        <Route exact path='/teams' component={Teams} />
                        <Route path='/teams/:Id' component={TeamDetails} />
                    </Switch>
                </div>
            </FilterId.Provider>

        </Router>

    </div>
  );
}

export default App;
export const  Filter = FilterId;
