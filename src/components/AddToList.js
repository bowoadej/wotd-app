import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function AddToList() {

    const [showAddToListButton, setAddToListButton] = useState(true);
    const [wordArray, setWordArray] = useState([]);

    useEffect(() => {
        Cookies.get([wordList]);
    }, []);


    return (
        <div className="AddToList">
            <button onClick={event => setAddToListButton(false)}>Add To List</button>
            <div className=" ListContainer">
                {
                    showAddToListButton &&
                    <div className="userWordList">
                        <h2>My Saved List</h2>
                    </div>
                }
            </div>
        </div>
        //Get Cookies of existing words
        // Append Array with Cookies of Existing Words
        //Show the list of the existing words
    )
}