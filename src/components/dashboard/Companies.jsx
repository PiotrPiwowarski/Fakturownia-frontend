import styles from './Dashboard.module.css';
import CompanyList from '../company/CompanyList';

const Companies = () => {
	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Firmy.</h1>
			</div>
			<div className={styles.content}>
				<CompanyList />
			</div>
		</div>
	);
};

export default Companies;
