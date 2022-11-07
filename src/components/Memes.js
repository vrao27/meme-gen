import { useState, useEffect } from "react";
import axios from "axios";

const Meme = () => {
  const baseURL = "https://api.imgflip.com/get_memes";

  const [memes, setMemes] = useState();

  // we use the State hook with the objects top and bottom
  const [inputs, setInputs] = useState({
    top: "",
    bottom: "",
  });

  useEffect(() => getMemes(), []);

  const getMemes = () => {
    axios
      .get(baseURL)
      .then((response) => {
        const myMeme = response.data.data.memes;
        console.log(myMeme);
        setMemes(myMeme);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // when we want to change the input fields when somethig is typed then we use the target.id in the handle change
  const handleChange = (e) => {
    const keyName = e.target.id;
    const newValue = e.target.value;
    setInputs((prevState) => ({ ...prevState, [keyName]: newValue }));
  };

  return (
    <div>
      {!memes ? (
        <h3>Loading...</h3>
      ) : (
        <div className="mememain" id={memes[0].id}>
          <input id="top" placeholder="top-text" onChange={handleChange} />
          <input
            id="bottom"
            placeholder="bottom-text"
            onChange={handleChange}
          />

          <h2>{memes[0].name}</h2>
          <div className="meme-number-uno">
            <p id="top-p">{inputs.top}</p>
            <p id="bottom-p">{inputs.bottom}</p>
            <img
              src={memes[0].url}
              height={memes[0].height}
              width={memes[0].width}
              alt="my-meme"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Meme;
