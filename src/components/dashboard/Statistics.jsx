import styles from './Dashboard.module.css';
import { useState } from 'react';
import SearchIcon from './../../img/SearchIcon';

const Statistics = () => {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Statystyki.</h1>
				<p>Za okres:</p>
				<div className={styles.horizontal}>
					<label>
						Data początkowa
						<input type='date' />
					</label>
					<label>
						Data końcowa
						<input type='date' />
					</label>
					<button className={styles.userButton}>
						<SearchIcon />
					</button>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.tile}>
					<h2>Ilość faktur</h2>
				</div>
				<div className={styles.tile}>
					<h2>Przychód netto</h2>
				</div>
				<div className={styles.tile}>
					<h2>Średnia wartość faktury</h2>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
