import React from "react";
import data from "../memsData";
export default function Form() {
    function handlerGetNewimage() {
        const url = data.data.memes.map((x) => {
            return Math.random(x.url * 100);
        });
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
                <button onClick={handlerGetNewimage} className="form--button">
                    Get a New meme image
                </button>
            </div>
        </main>
    );
}
