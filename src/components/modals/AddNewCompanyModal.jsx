import styles from './Modals.module.css';
import XIcon from '../../img/XIcon';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useUrlStore} from '../useStore';
import axios from 'axios';

const AddNewCompanyModal = ({ setIsAddModalOpen, fetchData }) => {

    const navigate = useNavigate();
    const {url} = useUrlStore();

    const [error, setError] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [postCode, setPostCode] = useState('');
    const [city, setCity] = useState('');
    const [nip, setNip] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

	const handleXIconBtn = () => {
		setIsAddModalOpen(false);
	};

    const handleAddBtn = async () => {
        if(companyName === '' || street === '' || buildingNumber === '' || postCode === '' || city === '' || nip === '') {
            setError('Należy wypełnić wszystkie pola formularza');
            return;
        }
        const newCompanyDto = {
            companyName,
            street,
            buildingNumber,
            postCode,
            city,
            nip,
            bankName,
            accountNumber
        }

        const jwt = localStorage.getItem('jwt');
        if(!jwt) {
            navigate('/');
            return;
        }
        try {

            await axios.post(`${url}/api/companies`, newCompanyDto, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});

            setCompanyName('');
            setStreet('');
            setBuildingNumber('');
            setPostCode('');
            setCity('');
            setNip('');
            setBankName('');
            setAccountNumber('');
            setError('');

            fetchData();
            setIsAddModalOpen(false);

        } catch(e){
            setError('Dodanie nowej firmy zakończone niepowodzeniem');
        }
    }

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<button className={styles.xBtn} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h2>Dodaj firmę</h2>
                <p className={styles.error}>{error}</p>
                <label>
                    Nazwa firmy
					<input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
				</label>
				<label>
                    Ulica
					<input type='text' value={street} onChange={(e) => setStreet(e.target.value)} />
				</label>
                <label>
                    Numer domu
					<input type='text' value={buildingNumber} onChange={(e) => setBuildingNumber(e.target.value)} />
				</label>
                <label>
                    Kod pocztowy
					<input type='text' value={postCode} onChange={(e) => setPostCode(e.target.value)} />
				</label>
                <label>
                    Miasto
					<input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
				</label>
                <label>
                    Nip
					<input type='text' value={nip} onChange={(e) => setNip(e.target.value)} />
				</label>
                <label>
                    Nazwa banku
					<input type='text' value={bankName} onChange={(e) => setBankName(e.target.value)} />
				</label>
                <label>
                    Numer konta
					<input type='text' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
				</label>
                <button className={styles.yesBtn} onClick={handleAddBtn}>Dodaj</button>
			</div>
		</div>
	);
};

export default AddNewCompanyModal;
