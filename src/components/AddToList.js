import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import ListArray from "./ListArray";

export default function AddToList({ generatedString }) {

    const generatedWord = generatedString;
    const cookiesList = Cookies.get("wordOfTheDay");
    const [showAddToListButton, setAddToListButton] = useState(true);
    const [existingArray, setExistingArray] = useState([cookiesList]);
    const [newArray, setNewArray] = useState([]);
    const [arrayContainsWord, setArrayContainsWord] = useState(false);
    /*TODO: Upon initalization: 
    1) Get the existing array in cookies 
    2)Calculate the length of array
    3)Insert a [generatedString] at the length of the array +1
    4) Set the cookie with the new array 
    */



    function runTheThing() {
        const lengthOfExistingArray = existingArray.length;
        //Cookies.set("wordOfTheDay", [wordArray])
        createNewArray(lengthOfExistingArray);
    }

    function createNewArray(length) {
        const newOne = existingArray.push(generatedString);
        setNewArray([existingArray]);
        Cookies.set("wordOfTheDay", [existingArray]);
    }

    return (
        <div className="AddToList">
            <button onClick={event => runTheThing()}>Add To List</button>
            <div className=" ListContainer">
                {
                    showAddToListButton &&
                    <div className="userWordList">
                        {arrayContainsWord &&
                            <div id="saved-list">
                                < h2 > My Saved Words</h2>
                                < ListArray theArray={existingArray} />
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