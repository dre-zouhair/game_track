import {useEffect, useState} from "react";

function TeamDetails(props) {
    const [Item,setItem]= useState(null);
    //console.log(props.match.params.Id);
    useEffect(()=> {
        fetch(process.env.REACT_APP_API_URL+'/teams/'+props.match.params.Id+'?token='+process.env.REACT_APP_token)
            .then(response => response.json())
            .then(data =>{
                setItem(data);
                console.log(data);
            })
            .catch(error=> console.log(error))
    },[]);
    //console.log(Item);
    console.log(Item);
    return (

        <>
            <div className="row">
                <div className="col-md-12">
                    <img src={Item&& Item.image_url} alt={Item && Item.name}/>
                    <h2> {Item && Item.name}</h2>
                    <h4>Game : {Item && Item.current_videogame.name}</h4>
                    <br/>
                    {
                        Item &&  Item.players.map(player => <span className="alert alert-secondary m-2">{player.first_name}</span>)
                    }
                    <hr/>
                </div>
            </div>
        </>

    );
}
export default TeamDetails;
