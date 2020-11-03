import React from 'react';
import League from "./League";
import './App.css';
import axios from 'axios';

class Leagues extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    /*constructor (props) {
        super(props);
    }*/
    constructor() {
        super();
        this.Load = this.Load.bind(this);
        this.getLeagues = this.getLeagues.bind(this);
        this.state = {
            Leagues : [],
            page_number:1,
            finale_page:false
        }
    }

    Load(number){
        this.setState((state) =>
        {
            return {
                Leagues : this.state.Leagues,
                page_number : this.state.page_number + number
            }
        },()=> this.getLeagues());
    }
    getLeagues(){
        /*
        fetch(process.env.REACT_APP_API_URL+'/leagues?page[size]=5&page[number]='+this.state.page_number+'&token='+process.env.REACT_APP_token)
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
        axios.get(process.env.REACT_APP_API_URL+'/leagues?page[size]=100&page[number]='+this.state.page_number+'&token='+process.env.REACT_APP_token)
            .then( res => {

                this.setState({
                        Leagues : res.data,
                        page_number: this.state.page_number,
                        finale_page: res.headers["x-total"]<100*this.state.page_number?true:false
                });
                console.log(res.headers);
            })

    }
    componentWillMount(number) {
        //  fetch(api.token.link, api.token.object)
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
                            <button onClick={() => this.Load(1)} disabled={this.state.finale_page}>{this.state.page_number+1}</button>
                            <button onClick={() => this.Load(2)} disabled={this.state.finale_page}>{this.state.page_number+2}</button>

                            <button onClick={() => this.Load(1)} disabled={this.state.finale_page}>Next</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Leagues;
