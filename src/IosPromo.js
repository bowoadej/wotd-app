import { useState } from "react"
import Accordion from "./Accordion"
import Privacy from "./Privacy"
import { Link } from "react-router-dom"
export default function IosPromo() {
    const privacyUrl = "wotd-app.com/privacy"
    const accordionData = [
        {
            title: "What is the word of the day app?",
            content: "Word Of The Day is an exciting way of expanding your vocabulary."
        },
        {
            title: "What is your privacy policy?",
            content: "You can find our privacy policy here:" + " " + privacyUrl,
        },
        {
            title: "What devices is WOTD available on?",
            content: "Currently WOTD is only supported on the website but will be available on the other device soon."
        }
    ]
    return (
        <div id="ios-promo">
            <h3>Download our iOS app</h3>
            <h3>Frequently Asked Questions </h3>


            <div className="faqs">
                {accordionData.map(({ title, content, url }) => (
                    <Accordion title={title} content={content} />
                ))}
                <br></br>
            </div>
        </div>
    )
}