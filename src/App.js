import './App.css';
import logo from "./images/logo192.png";
import myFakeData from './FakeData/fakePlayers';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeTeam from './Components/MakeTeam/MakeTeam';
import ShowPlayers from './Components/ShowPlayers/ShowPlayers';
function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [myPlayers, setMyPlayers] = useState([]);
  const initialValue = 0;
  const totalBudget = myPlayers.reduce((a, c) => {
      return a + c.salary;
  }, initialValue);
  // console.log({totalBudget});
  const addPlayers = (teamPlayers)=>{
      setMyPlayers(teamPlayers);
  }
  const removePlayers = (teamPlayers)=>{
    setMyPlayers(teamPlayers);
  }
  useEffect(() =>{
    const fakePlayers = myFakeData;
    setAllPlayers(fakePlayers);
  }, [])
  
  return (
    <div className="bg-dark">
      <div className="container py-3">
            <div className="d-flex justify-content-center w-50 row mx-auto">
                <img className="col-md-4 image-fluid" style={{height: "150px"}} src={logo} alt=""/>
                <h4 className="d-flex col-md-8 align-items-center text-light">Fantastic Football Club</h4>
            </div>
            <div className="row my-4 justify-content-center">
                <div className="col-md-3 text-center text-light d-flex">
                    <div>
                      <h3 className="text-warning">Club Details</h3>
                      <h6>Budget: {totalBudget} USD</h6>
                      <h6>No. Of Player: {myPlayers.length}</h6>
                      {
                          myPlayers.map(mp => {
                          return <MakeTeam key={mp.id} myPlayer={mp} myPlayers={myPlayers} removePlayers={removePlayers}/>
                      })
                      }
                    </div>
                    <div className="v-line ml-2 my-2"></div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {
                            allPlayers.map(player => <ShowPlayers key={player.id} player={player} myPlayers={myPlayers} allPlayers={allPlayers} addPlayers={addPlayers} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
