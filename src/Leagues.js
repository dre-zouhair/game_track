import React from 'react';
import League from "./League";
import './App.css';
class Leagues extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor (props) {
        super(props);
    }
    state = {
        Leagues : []
    }
    componentWillMount() {
        //  fetch(api.token.link, api.token.object)
        console.log(process.env.token);
        fetch('https://api.pandascore.co/leagues?token=d9zbt5VD5wx3tJWAFyfRZa5UgYW_-GyVEhwAERB60GEqMD4EiCE')
            .then(response => response.json())
            .then(
            data => {
                this.setState((state)=>{
                    console.log(data[1]);
                    return {
                        Leagues : data
                    }
                })
            }).catch(error => {
                console.log(error);
        });
    }


    render() {
        return (
            <>
            <h1>Leagues</h1>
                {this.state.Leagues.map(league => <League key={league.id} league={league}/>)}
            </>
        )
    }
}
export default Leagues;
