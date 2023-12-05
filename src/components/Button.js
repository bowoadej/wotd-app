function ChoiceButtons(wordUsed) {
    const isUsed = wordUsed
    if (isUsed) {
        return (
            <input type="text"></input>
        )
    } else {
        return (
            <h2>Try again tomorrow!</h2>
        )
    }

}


export default function Button() {
    return (
        <div className="button">
            <button type="button" onClick={ChoiceButtons(true)}>
                Yes
            </button>
            <button type="button" onClick={ChoiceButtons(false)}>
                No
            </button>
        </div>

    )
}