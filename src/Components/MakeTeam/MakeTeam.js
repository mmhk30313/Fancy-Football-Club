import React from 'react';

const MakeTeam = ({myPlayer, myPlayers, removePlayers}) => {
    // console.log(myPlayer);
    const {id,name, imgUrl, salary, country, playerPosition} = myPlayer;
    const handleRemovePlayers = (removablePlayerId)=>{
        const remainingPlayers = myPlayers.filter(mp => mp.id !== removablePlayerId);
        
        // const removablePlayerIndex = myPlayers.findIndex(mp => mp.id === removablePlayerId);
        
        removePlayers(remainingPlayers);
    }
    return (
        <div className="card text-center my-2">
            <div className="card text-dark rounded">
                <img className="image-fluid" style={{height: "300px"}} src={imgUrl} alt=""/>
                <div className="mx-2 my-1">
                    <h5 className="text-info">{name}</h5>
                    <h6><span className="text-danger">Salary:</span> {salary} USD</h6>
                    <h6><span className="text-success">Country:</span> {country}</h6>
                    <h6><small><span className="text-info">Player Position: </span>{playerPosition}</small></h6>

                    <button onClick={() => handleRemovePlayers(id)} className="btn btn-outline-danger mb-1">REMOVE</button>
                </div>
            </div>
        </div>
    );
};

export default MakeTeam;