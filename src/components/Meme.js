import React from "react";
import memesData from "../memesData";
export default function Form() {
    let [meme, setMeme] = React.useState({
        topText: "",
        bottonText: "",
        randomImage: "https://i.imgflip.com/21uy0f.jpg",
    });

    let [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        let memesArray = allMemeImages.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a New meme image
                </button>
                <h1></h1>
            </div>
            <img className="memeImage" src={meme.randomImage} />
        </main>
    );
}
