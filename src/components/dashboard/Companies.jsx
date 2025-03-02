import styles from './Dashboard.module.css';
import SearchIcon from '../../img/SearchIcon';
import CompanyList from '../company/CompanyList';

const Companies = () => {
	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Firmy.</h1>
				<p>Szukaj firmy:</p>
				<div className={styles.horizontal}>
					<label>
						Nazwa
						<input type='text' />
					</label>
					<button className={styles.userButton}>
						<SearchIcon />
					</button>
				</div>
			</div>
			<div className={styles.content}>
				<CompanyList />
			</div>
		</div>
	);
};

export default Companies;
