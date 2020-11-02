import React from 'react';
import League from "./League";
import './App.css';


class Leagues extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    /*constructor (props) {
        super(props);
    }*/
    state = {
        Leagues : []
    }
    componentWillMount() {
        //  fetch(api.token.link, api.token.object)
        console.log(process.env);
        fetch('https://api.pandascore.co/leagues?token=d9zbt5VD5wx3tJWAFyfRZa5UgYW_-GyVEhwAERB60GEqMD4EiCE')
            .then(response => response.json())
            .then(
            data => {
                this.setState((state)=>{
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
                <div className="container">

                    {this.state.Leagues.map(league => <League key={league.id} league={league}/>)}
                </div>

            </>
        )
    }
}
export default Leagues;
