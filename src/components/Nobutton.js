export default function Nobutton() {

    function handleNoClick() {
        <h3>Let us try again tomorrow!</h3>
    }


    return (
        <button onClick={handleNoClick} type="button">
            No
        </button>
    )
}
