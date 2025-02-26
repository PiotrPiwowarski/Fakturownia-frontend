import { useState, useEffect } from 'react';
import Invoice from './Invoice';
import MainBar from './MainBar';
import axios from 'axios';
import useStore from './useStore';
import AddIcon from '../img/AddIcon';
import { useNavigate } from 'react-router-dom';

const MyInvoices = () => {
	const { url } = useStore();
	const [error, setError] = useState('');
	const [yourInvoices, setYourInvoices] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchInvoices = async () => {
			const token = localStorage.getItem('jwt');
			if (!token) {
				setError('Brak tokenu autoryzacyjnego');
				return;
			}
			try {
				const response = await axios.get(`${url}/api/invoices`, {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				});
				setYourInvoices(response.data);
				setError('');
			} catch (e) {
				setError('Wystąpił błąd podczas pobierania faktur');
			}
		};

		fetchInvoices();
	}, [url]);

	const handleAddInvoiceBtn = () => {
		navigate('/createInvoice');
	}

	return (
		<div className='app main'>
			<MainBar />
			<div className='space-between'>
				<h2 className='h2-white'>Moje faktury</h2>
				<button className='svg-button' onClick={handleAddInvoiceBtn}>
					<AddIcon />
				</button>
			</div>
			<p className='app-error'>{error.message}</p>
			{yourInvoices.map((invoice) => {
				return <Invoice key={invoice.id} invoice={invoice} />;
			})}
		</div>
	);
};

export default MyInvoices;
