import { useState } from 'react';

const AddInvoicePosition = ({ visibility }) => {
	const [positionId, setPositionId] = useState(1);
	const [positionName, setPositionName] = useState('');
	const [positionAmount, setPositionAmount] = useState('');
	const [positionUnitOfMeasure, setPositionUnitOfMeasure] = useState('');
	const [positionUnitPrice, setPositionUnitPrice] = useState('');
	const [positionNettoValue, setPositionNettoValue] = useState('');
	const [positionVatPercent, setPositionVatPercent] = useState('');
	const [positionVatValue, setPositionVatValue] = useState('');
	const [positionBruttoValue, setPositionBruttoValue] = useState('');

	const [positions, setPositions] = useState([]);

	const onClickAddPosition = () => {
		const newPosition = {
			positionId,
			positionName,
			positionAmount,
			positionUnitOfMeasure,
			positionUnitPrice,
			positionNettoValue,
			positionVatPercent,
			positionVatValue,
			positionBruttoValue,
		};

		setPositions((prev) => [...prev, newPosition]);
		setPositionId((prev) => prev + 1);
		setPositionName('');
		setPositionAmount('');
		setPositionUnitOfMeasure('');
		setPositionUnitPrice('');
		setPositionNettoValue('');
		setPositionVatPercent('');
		setPositionVatValue('');
		setPositionBruttoValue('');
	};

	const onClickDeletePosition = (positionId) => {
		setPositions(prev => {
			return prev.filter(p => p.positionId !== positionId);
		});
	}

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
												{position.positionName}
											</td>
											<td className='invoice-view-td' style={{ width: '70px' }}>
												{position.positionAmount}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.positionUnitOfMeasure}
											</td>
											<td className='invoice-view-td' style={{ width: '70px' }}>
												{position.positionUnitPrice}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.positionNettoValue}
											</td>
											<td className='invoice-view-td' style={{ width: '70px' }}>
												{position.positionVatPercent}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.positionVatValue}
											</td>
											<td
												className='invoice-view-td'
												style={{ width: '100px' }}>
												{position.positionBruttoValue}
											</td>
											<td>
												<button className='add-invoice-position-delete-button' onClick={() => onClickDeletePosition(position.positionId)}>
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
			<label className='app-label'>
				* nazwa towaru / usługi
				<input
					className='app-input'
					type='text'
					value={positionName}
					placeholder=''
					onChange={(e) => setPositionName(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* ilość
				<input
					className='app-input'
					type='text'
					value={positionAmount}
					placeholder=''
					onChange={(e) => setPositionAmount(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* jednostka miary
				<select
					className='app-input'
					value={positionUnitOfMeasure}
					onChange={(e) => setPositionUnitOfMeasure(e.target.value)}>
					<option value='psc'>szt.</option>
					<option value='l'>l</option>
					<option value='kg'>kg</option>
				</select>
			</label>
			<label className='app-label'>
				* cena jednostkowa
				<input
					className='app-input'
					type='text'
					value={positionUnitPrice}
					placeholder=''
					onChange={(e) => setPositionUnitPrice(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* wartość netto
				<input
					className='app-input'
					type='text'
					value={positionNettoValue}
					placeholder=''
					onChange={(e) => setPositionNettoValue(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* procent vat
				<input
					className='app-input'
					type='text'
					value={positionVatPercent}
					placeholder=''
					onChange={(e) => setPositionVatPercent(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* kwota vat
				<input
					className='app-input'
					type='text'
					value={positionVatValue}
					placeholder=''
					onChange={(e) => setPositionVatValue(e.target.value)}
					required
				/>
			</label>
			<label className='app-label'>
				* wartość brutto
				<input
					className='app-input'
					type='text'
					value={positionBruttoValue}
					placeholder=''
					onChange={(e) => setPositionBruttoValue(e.target.value)}
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
