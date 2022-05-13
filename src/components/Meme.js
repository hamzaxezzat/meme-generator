import React from "react";
import memesData from "../memesData";
export default function Form() {
    // let url = memesArray[randomNumber].url;
    let [memeImage, setMemeImage] = React.useState("");
    function getMemeImage() {
        let memesArray = memesData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
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
        </main>
    );
}
