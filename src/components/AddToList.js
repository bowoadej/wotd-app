import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
export default function AddToList() {

    //const generatedWord;
    const [showAddToListButton, setAddToListButton] = useState(true);
    const [wordArray, setWordArray] = useState([]);
    const [arrayContainsWord, setArrayContainsWord] = useState(false)

    useEffect(() => {
        Cookies.set("wordsOfTheDay", JSON.stringify(wordArray));
    }, []);



    return (
        <div className="AddToList">
            <button onClick={event => setAddToListButton(false)}>Add To List</button>
            <div className=" ListContainer">
                {
                    showAddToListButton &&
                    <div className="userWordList">
                        {arrayContainsWord &&
                            < h2 > My Saved List</h2>
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