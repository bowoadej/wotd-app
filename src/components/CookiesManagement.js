import { useContext, useState, useEffect } from 'react';
import { Context } from './Context';
import Cookies from 'js-cookie';

export default function CookiesManagement() {
    const [showPopUp, setShowPopUp] = useState(true);
    const [showCookiePolicy, setShowCookiePolicy] = useState(false);
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

                        {showCookiePolicy &&
                            <div className='cookie-policy-container'>
                                < h2 > Cookie Policy </h2>
                                <p>This website uses cookies for operational purposes, and for the functioning of the application. By clicking 'Yes' you consent to the persistance of cookie to your device to enhance the experience of using this web app. By clicking 'Accept Stricly Necessary Cookies' we will restrict your experience to purely functional cookies to help deliver functionality on the webiste. </p>
                                <button className='cookie-policy' onClick={() => setShowCookiePolicy(false)}>Close Cookie notice</button>
                            </div>
                        }

                        <button className='cookie-yes' onClick={() => handleClick("true")} >Yes</button>
                        <button className='cookie-no' onClick={() => handleClick("false")} > Accept Stricly Necessary Cookies</button>
                        <button className='cookie-policy' onClick={() => setShowCookiePolicy(true)}>Cookie Policy</button>
                    </div>
                }
            </div>


        </div >

    )
}

