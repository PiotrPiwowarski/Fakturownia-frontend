import styles from './Home.module.css';
import Login from './Login';
import PasswordRecovery from './PasswordRecovery';
import Registration from './Registration';
import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Home = () => {
	const [quote, setQuote] = useState('');

	const [displayedComponent, setDisplayedComponent] = useState('login');

    const handleLogoBtn = () => {
        setDisplayedComponent('login');
    }

	useEffect(() => {
		const quotes = [
			{
				quote:
					'Każdy ranek daje szansę na to, by wieczorem móc powiedzieć: to był szczęśliwy dzień.',
				author: 'Małgorzata Stolarska',
			},
			{
				quote: 'Co należy zrobić po upadku? To co robią dzieci: podnieść się.',
				author: 'Aldous Huxley',
			},
			{
				quote:
					'To, czego boimy się najbardziej, jest z reguły tym, co właśnie powinniśmy zrobić.',
				author: 'Ralph W. Emerson',
			},
			{
				quote: 'Kiedy chcesz się poddać, przypomnij sobie, po co zacząłeś.',
				author: 'Charles De Gaulle',
			},
			{
				quote:
					'Jeśli nie potrafisz robić wielkich rzeczy, rób małe rzeczy w wielki sposób.',
				author: 'Napoleon Hill',
			},
		];
		const fetchQuote = async () => {
			try {
				const randomNumber = Math.floor(Math.random() * quotes.length);
				setQuote(quotes[randomNumber]);
			} catch (e) {
				setQuote(
					'Cierpliwość i wytrwałość mają magiczne działanie – dzięki nim trudności znikają, a przeszkody ulatniają się.'
				);
			}
		};
		fetchQuote();
	}, []);

	return (
		<div className={styles.bgc}>
			<div className={styles.header}>
				<button className={styles.logoButton} onClick={handleLogoBtn}>
					<Logo className={styles.logo} />
				</button>
			</div>
			<div className={styles.main}>
				<div className={styles.content}>
					{displayedComponent === 'login' ? (
						<Login setDisplayedComponent={setDisplayedComponent} />
					) : displayedComponent === 'registration' ? (
						<Registration setDisplayedComponent={setDisplayedComponent} />
					) : (
						<PasswordRecovery setDisplayedComponent={setDisplayedComponent} />
					)}
					<div className={styles.banner}>
						<div className={styles.quote}>
							<p>{quote.quote}</p>
							<p>~{quote.author}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
