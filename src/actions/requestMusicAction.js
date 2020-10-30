import Axios from "axios";

export const REQUEST_MUSIC = "REQUEST_MUSIC";
export const RECEIVE_MUSIC = "RECEIVE_MUSIC";
export const ERROR_MUSIC = "ERROR_MUSIC";
export const ADD_MUSIC = "ADD_MUSIC";
export const DELETE_MUSIC = "DELTE_MUSIC";

const requestMusic = () => ({
  type: REQUEST_MUSIC,
});


const addMusic = () => ({
  type: ADD_MUSIC,
});

const deleteMusic = () => ({
  type: DELETE_MUSIC,
});


const receiveMusic = (music) => ({
  type: RECEIVE_MUSIC,
  payload: music,
});


const errorMusic = () => ({
  type: ERROR_MUSIC,
});

export const requestMusicAction = () => {
  return async (dispatch) => {
    dispatch(requestMusic());

    const comics = await Axios.get(`http://localhost:8080/music`)
      .then((res) => {
        dispatch(receiveMusic(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(errorMusic());

        console.log(err);
      });

 
  };
};

export const addMusicAction = (lowBand, lowPeak, lowGain, highBand, highPeak, highGain) => {
  return async (dispatch) => {


    dispatch(addMusic());

    console.log("adding comics")

    const comics = await Axios.post(`http://localhost:8080/addMusic`,{   
      lowBand, lowPeak, lowGain, highBand, highPeak, highGain})
  };
};


export const deleteMusicAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteMusic());

    console.log(id)

    const comics = await Axios.post(`http://localhost:8080/deleteMusic`,{id:id})
    
 
  };
};