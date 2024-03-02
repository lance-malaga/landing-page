import Spline from '@splinetool/react-spline'
import styles from './NewxLetter.module.scss'

export default function NewsLetter() {
    return (
        <div className={styles.news_letter}>
            <div className={styles.news_letter__content}>
                <h4>Stay Informed, Stay Ahead!</h4>
                <p>Sign up for our newsletter to receive the latest updates, exclusive insights, and special offers directly to your inbox.</p>
                <button>SUBSCRIBE</button>
            </div>
            <div className={styles.news_letter__graphic}>
                <Spline scene={'https://prod.spline.design/9DywDJE54UmT6Yj9/scene.splinecode'} />
            </div>
        </div>
    )
}