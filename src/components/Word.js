import { useEffect, useState } from "react"


export default function Word(buttonState) {
    const [word, setWord] = useState("");
    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
            .then(response => response.json())
            .then(data => setWord(data))
    }, [])

    let url = "https://www.merriam-webster.com/dictionary/" + word;

    if (buttonState === "notClicked") {
        return <h2>Click the Generate Button Below To Generate Your Word Of The Day </h2>
    } else {
        return <h2>Your Word Of The Day Is <u><a href={url}>{word}</a></u></h2 >

    }

}
