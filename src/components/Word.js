import { useEffect, useState } from "react"


export default function Word(buttonState) {
    function ShowText(buttonState) {
        useEffect(() => {
            if (buttonState === "notClicked") {
                return <h2>Click the Generate Button Below To Generate Your Word Of The Day </h2>
            }
        }, [buttonState]);
    }



}
