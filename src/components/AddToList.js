import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import ListArray from "./ListArray";
export default function AddToList() {

    //const generatedWord;
    const [showAddToListButton, setAddToListButton] = useState(true);
    const [wordArray, setWordArray] = useState([]);
    const [arrayContainsWord, setArrayContainsWord] = useState(false);
    const wordsInArray = Cookies.set("wordOfTheDay", wordArray)
    //TODO: Upon initalization: 1) Get the existing array in cookies 2)Bind the array value to the wordArray state variable
    return (
        <div className="AddToList">
            <button onClick={event => setArrayContainsWord(true)}>Add To List</button>
            <div className=" ListContainer">
                {
                    showAddToListButton &&
                    <div className="userWordList">
                        {arrayContainsWord &&
                            <div id="saved-list">
                                < h2 > My Saved Words</h2>
                                < ListArray theArray={wordArray} />
                            </div>
                        }
                    </div>
                }
            </div>
        </div >
        //Get Array of existing words from Cookie
        // Append Array with Cookies of Existing Words
        //Show the list of the existing words
        //Do you set cookie first or get cookie?
    )
}