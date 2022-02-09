import styles from "./Platform.module.css";

function Platform() {
    const pageGithub    = () => window.open('https://github.com/reasley-com', '_blank')
    const pageInstagram = () => window.open('https://github.com/reasley-com', '_blank')
    const pageYoutube   = () => window.open('https://www.youtube.com/channel/UCrN-jQV-A5NpGrTlNQrW3nw/', '_blank')
    const pageTwitter   = () => window.open('https://twitter.com/reasley_com', '_blank')

    return (
        <div className={ styles.group__frame } >
            <div className={ styles.platform__frame } >
                <img onClick={ pageGithub } alt='github' src='/platform-github.svg' />
                <p>Github</p>
                <p>reasley-com</p>
            </div>

            <div className={ styles.platform__frame } >
                <img onClick={ pageInstagram } alt='github' src='/platform-instagram.svg' />
                <p>Instagram</p>
                <p>reasley-com</p>
            </div>

            <div className={ styles.platform__frame } >
                <img onClick={ pageYoutube } alt='github' src='/platform-youtube.svg' />
                <p>Youtube</p>
                <p>reasley-com</p>
            </div>

            <div className={ styles.platform__frame } >
                <img onClick={ pageTwitter } alt='github' src='/platform-twitter.svg' />
                <p>Twitter</p>
                <p>reasley-com</p>
            </div>
        </div>
    )
}
export default Platform