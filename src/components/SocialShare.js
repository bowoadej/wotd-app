
export default function SocialShare(props) {

    return (
        <div className="social-share">
            <p>Share your word on <a href={props.url}>{props.socialName}</a></p>

        </div>
    )
}