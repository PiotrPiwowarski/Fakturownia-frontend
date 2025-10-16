import styles from './Modals.module.css';
import XIcon from '../../img/XIcon';
import {useState} from 'react';
import axios from 'axios';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';

const EditCompanyModal = ({setIsEditModalOpen, company, fetchData}) => {

    const {url} = useUrlStore();
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [id, setId] = useState(company.id);
    const [newName, setNewName] = useState(company.name);
    const [newStreet, setNewStreet] = useState(company.street);
    const [newBuildingNumber, setNewBuildingNumber] = useState(company.buildingNumber);
    const [newPostCode, setNewPostCode] = useState(company.postCode);
    const [newCity, setNewCity] = useState(company.city);
    const [newNip, setNewNip] = useState(company.nip);
    const [newAccountName, setNewAccountName] = useState(company.bankName);
    const [newAccountNumber, setNewAccountNumber] = useState(company.accountNumber);

    const handleXIconBtn = () => {
		setIsEditModalOpen(false);
	};

    const handleEditBtn = async () => {
        const jwt = localStorage.getItem('jwt');

		if (!jwt) {
			navigate('/');
			return;
		}

		setError('');

		try {
            const editCompanDto = {
                id,
                name: newName,
                street: newStreet,
                buildingNumber: newBuildingNumber,
                postCode: newPostCode,
                city: newCity,
                nip: newNip,
                accountName: newAccountName,
                accoutnNumber: newAccountNumber
            }

			await axios.put(`${url}/api/companies`, editCompanDto, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			await fetchData();
            setIsEditModalOpen(false);
			setError('');
		} catch (e) {
			setError('Edycja firmy zakończyła się niepowodzeniem');
		}
    }

	return (
		<div className={styles.background}>
			<div className={styles.component}>
            <button className={styles.xBtn} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h2>Edytuj</h2>
                <p className={styles.error}>{error}</p>
                <label>
                    Nazwa
                    <input value={newName} type='text' onChange={(e) => setNewName(e.target.value)} />
                </label>
                <label>
                    Ulica
                    <input value={newStreet} type='text' onChange={(e) => setNewStreet(e.target.value)} />
                </label>
                <label>
                    Numer
                    <input value={newBuildingNumber} type='text' onChange={(e) => setNewBuildingNumber(e.target.value)} />
                </label>
                <label>
                    Kod pocztowy
                    <input value={newPostCode} type='text' onChange={(e) => setNewPostCode(e.target.value)} />
                </label>
                <label>
                    Miejscowość
                    <input value={newCity} type='text' onChange={(e) => setNewCity(e.target.value)} />
                </label>
                <label>
                    NIP
                    <input value={newNip} type='text' onChange={(e) => setNewNip(e.target.value)} />
                </label>
                <label>
                    Nazwa banku
                    <input value={newAccountName} type='text' onChange={(e) => setNewAccountName(e.target.value)} />
                </label>
                <label>
                    Numer konta
                    <input value={newAccountNumber} type='text' onChange={(e) => setNewAccountNumber(e.target.value)} />
                </label>
                <button className={styles.yesBtn} onClick={handleEditBtn}>Edytuj</button>
			</div>
		</div>
	);
};

export default EditCompanyModal;
