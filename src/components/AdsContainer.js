import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

export default function AdsContainer() {

    function Adverts(getCookieConsentValue) {
        if (CookieConsent) {
            return <div className="PersonalisedAds">
                <p> This is the personalised Ads container</p>
            </div>
        } else {
            return <div className="AnonAds">
                <p> This is the AnonAds Ads container</p>
            </div>
        }
    }
    Adverts(getCookieConsentValue)
}

