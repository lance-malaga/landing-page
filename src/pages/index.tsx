import CustomHead from '@/components/CustomHead';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header'
import { features } from '@/data/features';
import styles from '@/styles/Home.module.scss'

export default function Home() {
	return (
		<div className={styles.home__container}>
			<CustomHead name='Landing Page'/>
			<Header/>
			<main>
				<div className={styles.welcome}>
					<div className={styles.welcome__content}>
						<h1>Welcome to Venture</h1>
						<h6>Your Ultimate Guide to Vancouver Living!</h6>
						<p>
							Discover the perfect place to call home with Venture, where we provide comprehensive insights into Vancouver's major cities. From average rent prices to greenery spaces and density percentages, we've got you covered. Explore our user-friendly platform and make informed decisions for your ideal living experience in Vancouver.
						</p>
					</div>
					<div className={styles.welcome__graphic}>
						spline
					</div>
				</div>
				<div className={styles.features}>
					{features.map((item, index) => (
						<FeatureCard 
							key={index}
							title={item.title}
							desc={item.desc}
							link={item.link}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
