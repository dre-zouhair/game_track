import './App.css';
import React, {useContext, useEffect, useState} from "react";
import * as axios from "axios";
import Team from "./Team";
import {Filter} from './App'

function  Teams (){
    /*
    constructor(props) {
        super(props);
        this.state={key:this.props.league.id};
        console.log(this.state);
    }
    */
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
     }

  */
    const [data, setData] = useState({
        Teams : [],
        page_number:1,
        x_total: 0
    });
    const GameId = useContext(Filter);

    const LoadTeams = async () => {
        const result = await axios(
            process.env.REACT_APP_API_URL+'/'+GameId.data.Id+'/teams?page[size]=5&page[number]='+data.page_number+'&token='+process.env.REACT_APP_token
        );
        setData({
            Teams : result.data,
            page_number: data.page_number,
            x_total: result.headers["x-total"]
        });


    };
    useEffect( () => LoadTeams() ,[data.page_number,GameId]);

    const Load = (number) => {
        setData({
            Teams : data.Teams,
            page_number: data.page_number  + number,
            x_total: data.x_total
        });
        console.log(data);
    }

        return (
            <>
                <div className="container">
                    {data.Teams.map(team => <Team key={team.id} team={team}/>)}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button onClick={() => Load(-1)}  disabled={data.page_number == 1}>Back</button>
                            <button onClick={() => Load(-2)} hidden={data.page_number-2 <1}>{data.page_number-2}</button>
                            <button onClick={() => Load(-1)} hidden={data.page_number-1 <1}>{data.page_number-1}</button>
                            <button onClick={() => Load(0)} disabled={true}>{data.page_number}</button>
                            <button onClick={() => Load(1)} hidden={data.x_total < 5*(data.page_number)}>{data.page_number+1}</button>
                            <button onClick={() => Load(2)} hidden={data.x_total < 5*(data.page_number+1)}>{data.page_number+2}</button>
                            <button onClick={() => Load(1)} disabled={data.x_total<5*data.page_number}>Next</button>
                        </div>
                    </div>
                </div>

            </>
        );

}
export default Teams;
