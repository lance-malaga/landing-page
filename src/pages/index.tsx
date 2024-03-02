import Spline from '@splinetool/react-spline'
import styles from '@/styles/Home.module.scss'

import { features } from '@/data/features';

import CustomHead from '@/components/CustomHead';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import NewsLetter from '@/components/NewsLetter';

export default function Home() {
	return (
		<div className={styles.home__container}>
			<CustomHead name='Landing Page'/>
			<Header/>
			<main>
				<section className={styles.welcome}>
					<div className={styles.welcome__content}>
						<h1>Welcome to Venture</h1>
						<h6>Your Ultimate Guide to Vancouver Living!</h6>
						<p>
							Discover the perfect place to call home with Venture, where we provide comprehensive insights into Vancouver's major cities. From average rent prices to greenery spaces and density percentages, we've got you covered. Explore our user-friendly platform and make informed decisions for your ideal living experience in Vancouver.
						</p>
						<button>Join Now</button>
					</div>
					<div className={styles.welcome__graphic}>
						<Spline scene={'https://prod.spline.design/QqbuxiSWlluTDqDm/scene.splinecode'} />
					</div>
				</section>
				<section className={styles.features}>
					<h3>FEATURES</h3>
					<div className={styles.features__container}>
						{features.map((item, index) => (
							<FeatureCard 
								key={index}
								title={item.title}
								desc={item.desc}
								link={item.link}
							/>
						))}
					</div>
				</section>
				<NewsLetter/>
			</main>
			<Footer/>
		</div>
	);
}
