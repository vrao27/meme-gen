import { useState, useEffect } from "react";
import axios from "axios";

const Memes = () => {
  const baseURL = "https://api.imgflip.com/get_memes";

  const [meme, setMeme] = useState();
  useEffect(() => getMemes(), []);

  const getMemes = () => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        const myMeme = response.data;
        setMeme(myMeme);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  return <div>Memes</div>;
};

export default Memes;
