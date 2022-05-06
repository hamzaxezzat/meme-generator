import React from "react";

export default function Form() {
    return (
        <main>
            <form className="form">
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
                <button className="form--button">Get a bew meme image</button>
            </form>
        </main>
    );
}
