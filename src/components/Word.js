import { useEffect, useState } from "react"

export default function Word() {
    const [word, setWord] = useState("");
    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
            .then(response => response.json())
            .then(data => setWord(data))
    }, [])

    return (
        <h2>Your Word Of The Day Is <u><b>{word}</b></u></h2 >
    )
}
