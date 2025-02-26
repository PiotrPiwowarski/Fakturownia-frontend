import { useState } from 'react';

const AddInvoicePosition = ({ visibility, setNewInvoicePositionList }) => {
	const [positionId, setPositionId] = useState(1);
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [unitOfMeasure, setUnitOfMeasure] = useState('PCS');
	const [unitPrice, setUnitPrice] = useState('');
	const [nettoValue, setNettoValue] = useState('');
	const [vatPercent, setVatPercent] = useState('');
	const [vatValue, setVatValue] = useState('');
	const [bruttoValue, setBruttoValue] = useState('');

	const [error, setError] = useState('');
	const [positions, setPositions] = useState([]);

	const onClickAddPosition = () => {
		if(name.length === 0 || amount.length === 0 || unitOfMeasure.length === 0 || unitPrice.length === 0 ||  nettoValue.length === 0 || vatPercent.length === 0 || vatValue.length === 0 || bruttoValue.length === 0) {
			setError('Należy wypełnić wszystkie pola oznaczone jako obowiązkowe');
			return;
		} else {
			setError('');
			const newPosition = {
				positionId,
				name,
				amount,
				unitOfMeasure,
				unitPrice,
				nettoValue,
				vatPercent,
				vatValue,
				bruttoValue,
			};
	
			setPositions((prev) => [...prev, newPosition]);
			setNewInvoicePositionList((prev) => [...prev, newPosition]);
			setPositionId((prev) => Number(prev) + 1);
			setName('');
			setAmount('');
			setUnitOfMeasure('');
			setUnitPrice('');
			setNettoValue('');
			setVatPercent('');
			setVatValue('');
			setBruttoValue('');
		}
	};

	const handleDeletePositionBtn = (positionId) => {
		setPositions(prev => prev.filter(p => p.positionId !== positionId));
		setNewInvoicePositionList(prev => prev.filter(p => p.positionId !== positionId));
	};
	

	return (
		<div className={`app-form ${visibility}`}>
			<h3>Twoje pozycje</h3>
			<div className='add-invoice-position-display-all'>
				{positions.length === 0 ? (
					<p className='app-paragraph'>brak pozycji do wyświetlenia</p>
				) : (
					<div className='invoice-view-table'>
						<table>
							<thead className='invoice-view-thead'>
								<tr>
									<th style={{ width: '250px' }}>nazwa towaru / usługi</th>
									<th style={{ width: '70px' }}>ilość</th>
									<th style={{ width: '70px' }}>j.m.</th>
									<th style={{ width: '70px' }}>cena jed.</th>
									<th style={{ width: '100px' }}>wartość netto</th>
									<th style={{ width: '70px' }}>% vat</th>
									<th style={{ width: '10px' }}>kwota vat</th>
									<th style={{ width: '100px' }}>wartość brutto</th>
								</tr>
							</thead>
							<tbody>
								{positions.map((position) => {
									return (
										<tr key={position.positionId}>
											<td
												className='invoice-view-td'
												style={{ width: '250px' }}>
												{position.name}
											</td>
											<td className='invoice-view-td' style={{ width: '70px' }}>
												{position.amount}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.unitOfMeasure}
											</td>
											<td className='invoice-view-td' style={{ width: '70px' }}>
												{position.unitPrice}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.nettoValue}
											</td>
											<td className='invoice-view-td' style={{ width: '70px' }}>
												{position.vatPercent}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.vatValue}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.bruttoValue}
											</td>
											<td>
												<button className='add-invoice-position-delete-button' onClick={() => handleDeletePositionBtn(position.positionId)}>
													usuń wiersz
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
			<h3>Nowa pozycja</h3>
			<p className='app-error'>{error}</p>
			<label className='app-label'>
				* nazwa towaru / usługi
				<input
					className='app-input'
					type='text'
					value={name}
					placeholder=''
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* ilość
				<input
					className='app-input'
					type='number'
					value={amount}
					placeholder=''
					onChange={(e) => setAmount(e.target.value.toString())}
					required
				/>
			</label>
			<label className='app-label'>
				* jednostka miary
				<select
					className='app-input'
					value={unitOfMeasure}
					onChange={(e) => setUnitOfMeasure(e.target.value)}>
						<option value='THOUSAND_PCS'>tys. szt.</option>
					<option value='PCS'>szt.</option>
					<option value='L'>l</option>
					<option value='KG'>kg</option>
				</select>
			</label>
			<label className='app-label'>
				* cena jednostkowa
				<input
					className='app-input'
					type='number'
					value={unitPrice}
					placeholder=''
					onChange={(e) => setUnitPrice(e.target.value.toString())}
					required
				/>
			</label>
			<label className='app-label'>
				* wartość netto
				<input
					className='app-input'
					type='number'
					value={nettoValue}
					placeholder=''
					onChange={(e) => setNettoValue(e.target.value.toString())}
					required
				/>
			</label>
			<label className='app-label'>
				* procent vat
				<input
					className='app-input'
					type='number'
					value={vatPercent}
					placeholder=''
					onChange={(e) => setVatPercent(e.target.value.toString())}
					required
				/>
			</label>
			<label className='app-label'>
				* kwota vat
				<input
					className='app-input'
					type='number'
					value={vatValue}
					placeholder=''
					onChange={(e) => setVatValue(e.target.value.toString())}
					required
				/>
			</label>
			<label className='app-label'>
				* wartość brutto
				<input
					className='app-input'
					type='number'
					value={bruttoValue}
					placeholder=''
					onChange={(e) => setBruttoValue(e.target.value.toString())}
					required
				/>
			</label>
			<button className='app-border-button' onClick={onClickAddPosition}>
				+ dodaj pozycję
			</button>
		</div>
	);
};

export default AddInvoicePosition;
