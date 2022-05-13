import React from "react";
import memesData from "../memesData";
export default function Form() {
    let url;
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomMemeNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomMemeNumber].url;
        console.log(url);
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
                <button onClick={getMemeImage} className="form--button">
                    Get a New meme image
                </button>
                <h1>{url}</h1>
            </div>
        </main>
    );
}
