// src: https://reactjs.org/docs/events.html

import React from "react";

export default function App() {
    function hover() {
        console.log("I am hoverd");
    }

    return (
        <div className="container">
            <img onMouseOver={hover} src="https://picsum.photos/640/360" />
            <button>Click me</button>
        </div>
    );
}
