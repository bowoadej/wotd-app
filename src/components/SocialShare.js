
export default function SocialShare(props) {

    return (
        <div className="social-share">
            <h3>Share your word on <a href={props.url}>{props.socialName}</a></h3>

        </div>
    )
}