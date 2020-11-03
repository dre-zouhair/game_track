import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
class League extends React.Component{
    /*
    constructor(props) {
        super(props);
        this.state={key:this.props.league.id};
        console.log(this.state);
    }
    */
     state={};

    /* componentWillMount() {

      //   console.log(this.props.league.id);
         // eslint-disable-next-line react/no-direct-mutation-state
       /* this.state = {
             id : this.props.id,
             name : this.props.name

         }
         this.setState({
                id : this.props.league.id,
                name : this.props.league.name,
                image_url : this.props.league.image_url
         });
         console.log(this.state);
     }*/

    render() {
      //  console.log(`/leagues/${this.props.league.id}`);
        return (

            <div className="row">
                <div className="col align-self-center ">
                <div className="card m-2">
                        <div className="card-body">
                            <img className="card-img-top mr-4" src={this.props.league.image_url+'?token=d9zbt5VD5wx3tJWAFyfRZa5UgYW_-GyVEhwAERB60GEqMD4EiCE'} alt={this.state.name}/>
                            <strong className="card-title">{this.props.league.name}</strong>
                        </div>
                    <div className="card-footer">
                        <Link to={`/leagues/${this.props.league.id}`}>Deatail</Link>
                    </div>
                </div>
                </div>
            </div>


        );
    }
}
export default League;
