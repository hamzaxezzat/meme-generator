import React from "react";
import memesData from "../memesData";
export default function Form() {
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
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
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...meme,
            [name]: value,
        }));
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a New meme image
                </button>
                <h1></h1>
            </div>
            <div className="full-meme">
                <img className="memeImage" src={meme.randomImage} />
                <h1 className="meme-text top">{meme.topText}</h1>
                <h1 className="meme-text bottom">{meme.bottomText}</h1>
            </div>
        </main>
    );
}
