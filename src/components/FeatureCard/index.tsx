import Spline from '@splinetool/react-spline'
import styles from './FeatureCard.module.scss'

export default function FeatureCard(props:IFeatureCardProps) {
    return (
        <div className={styles.feature_card}>
            {props.link &&
                <div className={styles.feature_card__graphic}>
                    <Spline scene={props.link} />
                </div>
            }
            <hr/>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}