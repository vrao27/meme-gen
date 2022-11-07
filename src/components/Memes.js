import {useState, useEffect} from "react";
import axios from 'axios';


const baseURL = "https://api.imgflip.com/get_memes";

const [meme, setMeme] = useState();
  
const getMemes = () => { 
    axios.get(baseURL)
    .them((response) => {
        console.log(response);
        const myMeme = response.data;
        setMeme(myMeme);
    });
    
    useEffect(() => getMemes(), []);

  return (
    <div>Memes</div>
  )
}

export default Memes}