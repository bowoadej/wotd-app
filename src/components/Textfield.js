function WordBool({ wordUsed }) {
    if (wordUsed) {
        return <input type="text"></input>
    }
    return <h2>Try again tomorrow!</h2>
}

export default function InputTextField() {
    <input wordUsed={true} type="text"></input>;

    return <h2 wordUsed={false}>Try again tomorrow!</h2>
}
