import { useState } from "react"

export default function EmailContainer() {
    const [showEmailContainer, setEmailContainer] = useState(false)
    return (
        <div className="email-container">
            <button className="email-button" onClick={event => setEmailContainer(true)} > <h3>Click Here To Sign Up For Daily Word Of The Day Notifications</h3></button>
            {
                showEmailContainer && <div className="email-container-form">
                    <label for="Email">Enter Your Email:</label>
                    <input type="text" />
                </div>
            }
        </div >
    )
}
