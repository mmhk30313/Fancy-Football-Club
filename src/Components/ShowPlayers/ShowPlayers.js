import React from 'react';

const ShowPlayers = ({player, myPlayers, allPlayers, addPlayers}) => {
    //Destructuring
    const {id,name, imgUrl, salary, country, club, playerPosition} = player;
    const handleAddMyPlayers = (id)=>{
        const myPlayer = allPlayers.find(p => p.id === id);
        const myAllPlayers = [...myPlayers];
        // console.log(myAllPlayers);
        // addPlayers(myAllPlayers);
        const flag = myPlayers.find(mp => mp.id === myPlayer.id);
        if(flag){
            addPlayers(myPlayer);
        }
        else{
            myAllPlayers.push(myPlayer);
            // console.log(myAllPlayers);
        }
        addPlayers(myAllPlayers);
        // console.log(myAllPlayers);
    }
    return (
        <div className="col-md-4 my-2">
            <div className="card text-dark rounded">
                <img className="image-fluid" style={{height: "300px"}} src={imgUrl} alt=""/>
                <div className="text-justify mx-2 my-1">
                    <h5 className="text-info">{name}</h5>
                    <h6><span className="text-danger">Salary:</span> {salary} USD</h6>
                    <h6><span className="text-success">Country:</span> {country}</h6>
                    <h6><small><span className="text-warning">Club Name: </span>{club}</small></h6>
                    <h6><small><span className="text-info">Player Position: </span>{playerPosition}</small></h6>

                    <button onClick={() => handleAddMyPlayers(id)} className="btn btn-outline-success mb-1">ADD YOUR TEAM</button>
                </div>
            </div>
        </div>
    );
};

export default ShowPlayers;