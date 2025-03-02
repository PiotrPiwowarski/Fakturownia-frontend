import Invoice from './Invoice';
import styles from './Invoice.module.css';

const InvoiceList = () => {
    return (
        <div className={styles.contener}>
            <Invoice />
        </div>
    );
}

export default InvoiceList;