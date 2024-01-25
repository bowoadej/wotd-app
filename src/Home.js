
import Button from "./components/Button"
import SocialShare from "./components/SocialShare"
import EmailContainer from "./components/EmailContainer"
import CookiesManagement from "./components/CookiesManagement"
import Footer from "./Footer"
import AddToList from "./components/AddToList"

export default function Home() {
    return (
        <div id="home">
            <div>
                <p>W.O.T.D is an app for generating Word Of The Day.<br>
                </br> Word Of The Day is a great way to improve your vocabulary. You can click on the Word Of The Day to get a dictionary definition.</p>
                <Button />
                <h2>Share on social</h2>
                <div className="social-stack">
                    <SocialShare socialName="Facebook" url="https://www.facebook.com" />
                    <SocialShare socialName="X" url="https://www.x.com" />
                    <SocialShare socialName="LinkedIn" url="https://www.linkedin.com" />
                </div>
                <EmailContainer />
            </div >
            <CookiesManagement />
        </div>
    )
}