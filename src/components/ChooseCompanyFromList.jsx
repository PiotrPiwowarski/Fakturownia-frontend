import {useEffect, useState} from 'react';
import axios from 'axios';
import useStore from './useStore';

const ChooseComapnyFromList = ({
	setCompanyName,
	setStreet,
	setBuildingNumber,
	setPostCode,
	setCity,
	setNip,
	setBankName,
	setBankAccountNumber,
	companyName,
	street,
	buildingNumber,
	postCode,
	city,
	nip,
	bankName,
	bankAccountNumber,
	setError
}) => {
    const { url } = useStore();
    const [yourCompanies, setYourCompanies] = useState([]);

    useEffect(() => {
		const fetchInvoices = async () => {
			const token = localStorage.getItem('jwt');
			if (!token) {
				setError('Brak tokenu autoryzacyjnego');
				return;
			}
			try {
				const response = await axios.get(`${url}/api/companies`, {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				});
				setYourCompanies(response.data);
				setError('');
			} catch (e) {
				setError('Wystąpił błąd podczas pobierania faktur');
			}
		};

		fetchInvoices();
	}, [url]);

    return (
        <div>
            {yourCompanies.map(company => {
                return (
                    <div key={company.id}>
                        <p className="invoice-font">{company.name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ChooseComapnyFromList;