import {Link} from "react-router-dom";
import React from "react";

function Team(props) {
    return (

        <div className="row">
            <div className="col align-self-center ">
                <div className="card m-2">
                    <div className="card-body">
                        <img className="card-img-top mr-4" src={props.team.image_url+'?token=d9zbt5VD5wx3tJWAFyfRZa5UgYW_-GyVEhwAERB60GEqMD4EiCE'} alt={props.team.name}/>
                        <strong className="card-title">{props.team.name}</strong>
                    </div>
                    <div className="card-footer">
                        <Link to={`/teams/${props.team.id}`}>Deatail</Link>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Team;
