import Company from './Company';
import styles from './Company.module.css';

const CompanyList = ({companies, error, fetchData, setError}) => {


	return (
		<div className={styles.contener}>
			<p className={styles.error}>{error}</p>
			<div className={`${styles.component} ${styles.marginBottom}`}>
				<div className={styles.name}>
					<p className={styles.underline}>Nazwa</p>
				</div>
				<div className={styles.nip}>
					<p className={styles.underline}>NIP</p>
				</div>
				<div className={styles.preview}>
					
				</div>
				<div className={styles.delete}>
					
				</div>
			</div>
			{companies.length === 0 ? (
				<p>Brak firm do wyświetlenia.</p>
			) : (
				companies.map((company) => {
					return <Company key={company.id} company={company} onDeleteSuccess={fetchData} setError={setError} fetchData={fetchData} />;
				})
			)}
		</div>
	);
};

export default CompanyList;