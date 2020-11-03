import React from 'react';
import League from "./League";
import './App.css';
import axios from 'axios';

class Leagues extends React.Component {

    constructor() {
        super();
        this.Load = this.Load.bind(this);
        this.getLeagues = this.getLeagues.bind(this);
        this.state = {
            Leagues : [],
            page_number:1,
            x_total: 0
        }
    }

    Load(number){
        this.setState((state) =>
        {
            return {
                Leagues : this.state.Leagues,
                page_number : this.state.page_number + number,
                x_total: this.state.x_total
            }
        },()=> this.getLeagues());
    }
    getLeagues(){
        /*
        fetch(process.env.REACT_APP_API_URL+'/leagues'+'?token='+process.env.REACT_APP_token)
            .then(
            response => {
                    this.setState((state)=>{
                        return {
                            Leagues : response.json(),
                            page_number: this.state.page_number
                        }
                    });
                }).catch(error => {
            console.log(error);
        });
        */
        axios.get(process.env.REACT_APP_API_URL+'/leagues?page[size]=50&page[number]='+this.state.page_number+'&token='+process.env.REACT_APP_token)
            .then( response => {
                this.setState({
                        Leagues : response.data,
                        page_number: this.state.page_number,
                        x_total: response.headers["x-total"]
                });
                console.log(response);
            });

    }
    componentWillMount(number) {
        this.getLeagues();
    }


    render() {
        return (
            <>
                <div className="container">
                    {this.state.Leagues.map(league => <League key={league.id} league={league}/>)}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button onClick={() => this.Load(-1)}  disabled={this.state.page_number == 1}>Back</button>

                            <button onClick={() => this.Load(-2)} hidden={this.state.page_number-2 <1}>{this.state.page_number-2}</button>
                            <button onClick={() => this.Load(-1)} hidden={this.state.page_number-1 <1}>{this.state.page_number-1}</button>
                            <button onClick={() => this.Load(0)} disabled={true}>{this.state.page_number}</button>
                            <button onClick={() => this.Load(1)} hidden={this.state.x_total < 50*(this.state.page_number)}>{this.state.page_number+1}</button>
                            <button onClick={() => this.Load(2)} hidden={this.state.x_total < 50*(this.state.page_number+1)}>{this.state.page_number+2}</button>

                            <button onClick={() => this.Load(1)} disabled={this.state.x_total<50*this.state.page_number}>Next</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Leagues;
