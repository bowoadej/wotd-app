import React from "react";

export default function ListArray({ theArray }) {


    const wordList = theArray
    /*const wordItems = wordList.map((wordItem) =>
        <li>{wordItem}</li>
    );*/
    const wordItems = wordList.map((wordItem) =>
        <li>{wordItem}</li>
    );
    console.log(theArray.typeOf);

    return (
        <div className="word-list">
            <ul>{wordItems}</ul>
        </div>
    )
}