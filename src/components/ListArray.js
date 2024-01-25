import React from "react";

export default function ListArray({ theArray }) {


    const wordList = theArray;
    /*const wordItems = wordList.map((wordItem) =>
        <li>{wordItem}</li>
    );*/
    const wordItems = wordList.map((wordItem) =>
        <li>{wordItem}</li>
    );

    const wordContainsArray = wordItems instanceof String

    return (
        <div className="word-list"> {
            wordContainsArray ?
                <ul>{wordItems}</ul>
                : <p>You don't have any words in your saved list.</p>
        }
        </div>
    )
}