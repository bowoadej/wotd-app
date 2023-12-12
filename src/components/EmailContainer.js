import { useState } from "react";

export default function EmailContainer() {
    const [EmailContainerState, setEmailContainerState] = useState(false);

    return (

        <div className="email-container">
            {EmailContainerState &&
                <div className="email-container-form">
                    <h3>Enter Your Email Below To Sign Up For Daily Word Of The Day Notifications</h3>

                    <input type="text" />
                    <button>Submit</button>
                </div>
            }
        </div >

    )
}
