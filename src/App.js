import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { requestMusicAction, addMusicAction, deleteMusicAction } from "./actions/requestMusicAction";

const App = ({
  count,
  music,
  error,
  isLoading,
  incrementCountAction,
  requestMusicAction,
  deleteMusicAction,
  addMusicAction
}) => {
  const [search, setSearch] = useState("");
  const [lowBand, setLowBand] = useState("");
  const [lowPeak, setLowPeak] = useState("");
  const [lowGain, setLowGain] = useState("");
  const [highBand, setHighBand] = useState("");
  const [highPeak, setHighPeak] = useState("");
  const [highGain, setHighGain] = useState("");

 



  const handleAdd =  async(e) => {
    

    await addMusicAction(lowBand, lowPeak, lowGain, highBand, highPeak, highGain)
    
    await requestMusicAction()

    e.preventDefault();
  }

  

  useEffect(()=>{


    requestMusicAction()
    
    
  },[])


  const handleDelete = async(e) =>{ 


    await deleteMusicAction(e.currentTarget.className)
    await requestMusicAction()
  }
 

  return (
    <div className="App">
      <h2>SEARCH FOR MUSIC: </h2>
        <br/>
        <form onSubmit={(e)=>{e.preventDefault()}}>
        <label>Low Band</label>
        <input onChange={(e)=>{setLowBand(e.target.value)}} />
        <br/>
        <label>Low Peak</label>
        <input  onChange={(e)=>{setLowPeak(e.target.value)}}/>
        <br/>
        <label>Low Gain</label>
        <input  onChange={(e)=>{setLowGain(e.target.value)}}/>
        <br/>
        <label>High Band</label>
        <input  onChange={(e)=>{setHighBand(e.target.value)}}/>
        <br/>
        <label>High Peak</label>
        <input  onChange={(e)=>{setHighPeak(e.target.value)}}/>
        <br/>
        <label>High Gain</label>
        <input  onChange={(e)=>{setHighGain(e.target.value)}}/>
        <br/>
        <button onClick={handleAdd}>ADD MUSIC</button>

        </form>

      <br />



         
      <div>
      {error ? (
        <>ERROR LOADING DATA FROM API</>
      ) : (
      <>{music.length > 0 ? <>{music.map((data)=>{ return <div>
        Low Band: {data.LowBand},
        Low Gain: {data.LowGain},
        Low Peak: {data.LowPeak},
        High Band: {data.HighBand},
        High Gain: {data.HighGain},
        High Peak: {data.HighPeak}
        <button className={data._id} onClick={(e)=>{handleDelete(e)}}>Delete</button>
        </div>})}</> : <>loading...</>}</>
      )}
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.music.isLoading,
  music: state.music.entries,
  error: state.music.error,
});

const mapDispatchToProps = {
  requestMusicAction,
  addMusicAction,
  deleteMusicAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
