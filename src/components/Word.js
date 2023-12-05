import { useEffect, useState } from "react"


export default function Word() {
    const [word, setWord] = useState("");
    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
            .then(response => response.json())
            .then(data => setWord(data))
    }, [])

    let url = "https://www.merriam-webster.com/dictionary/" + word

    return (
        <h2>Your Word Of The Day Is <u><a href={url}>{word}</a></u></h2 >
    )
}
