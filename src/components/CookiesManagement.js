import { useContext, useState, useEffect } from 'react';
import { Context } from './Context';
import Cookies from 'js-cookie';

export default function CookiesManagement() {
    const [showPopUp, setShowPopUp] = useState(true);
    //const [context, setContext] = useContext(Context);
    function setCookieConsent(cookieValue) {
        Cookies.set("consent", cookieValue);
    }

    useEffect(() => {
        checkCookieState();
    }, [], setTimeout(2000));

    function checkCookieState() {

        var cookieStateValue = Cookies.get("consent");

        if (cookieStateValue === undefined) {
            setShowPopUp(true);
        } else {
            setShowPopUp(false);
        }
    }


    function handleClick(message) {
        setCookieConsent(message);
        setShowPopUp(false);
    }

    return (
        <div className='cookie-pop-up'>
            <div>
                {showPopUp &&
                    <div className='cookie-container'>
                        <h3>Cookies</h3>
                        <p>This Site uses cookies to give you the best experience. Would you like Cookies to be enabled?</p>
                        <button className='cookie-yes' onClick={() => handleClick("true")} >Yes</button>
                        <button className='cookie-no' onClick={() => handleClick("false")} > No</button>
                    </div>
                }
            </div>


        </div >

    )
}

