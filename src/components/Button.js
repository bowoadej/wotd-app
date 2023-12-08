import { useState, useEffect } from "react";

export default function Button() {
    const [word, setWord] = useState("");
    const [button, setButtonState] = useState(false);
    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
            .then(response => response.json())
            .then(data => setWord(data))
    }, []);
    let url = "https://www.merriam-webster.com/dictionary/" + word;

    return (
        <div className="main-container">
            <div className="title">
                {button && <h3>Your Word Of The Day Is <a href={url}> {word}</a> </h3>}
                <div className="button">
                    <button type="button" onClick={event => setButtonState(true)}>
                        Generate
                    </button >
                </div >
            </div>
        </div>
    )
}