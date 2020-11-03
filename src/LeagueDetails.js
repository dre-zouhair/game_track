import {useEffect, useState} from "react";

function LeagueDetails(props){
    const [Item,setItem]= useState(null);
    //console.log(props.match.params.Id);
    useEffect(()=> {
        fetch(process.env.REACT_APP_API_URL+'/leagues/'+props.match.params.Id+'?token='+process.env.REACT_APP_token)
            .then(response => response.json())
            .then(data =>{
                setItem(data);
                console.log(data);
            })
            .catch(error=> console.log(error))
    },[]);
    //console.log(Item);
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <img src={Item&& Item.image_url} alt={Item && Item.name}/>
                    <h3 className="m-4">{Item && Item.name}</h3>
                    <h4>Game : {Item && Item.videogame.name}</h4>
                    <br/>
                    <hr/>
                    <h5>{Item && Item.series[0].full_name}</h5>
                    <h6>From : {Item && Item.series[0].begin_at}</h6>
                    <br/>
                    <hr/>
                </div>
            </div>
        </>

    );
}
export default  LeagueDetails;
