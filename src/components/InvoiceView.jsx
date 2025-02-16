import { useLocation } from 'react-router-dom';
import MainBar from './MainBar';

const InvoiceView = () => {
	const location = useLocation();
	const { invoice } = location.state || {};

	return (
		<div className='app'>
			<MainBar />
			<div className='invoice-view'>
				<p>Data wystawienia: {invoice.dateOfIssue}</p>
				<p>Data sprzedaży: {invoice.dateOfSale}</p>

				<div className='invoice-view-header'>
					<h1>FAKTURA VAT NR {invoice.invoiceNumber}</h1>
					<p>{invoice.originality === 'ORIGINAL' ? 'oryginał' : 'kopia'}</p>
				</div>

				<div className='invoice-view-companies-data'>
					<div className='invoice-view-companies-seller-data'>
						<h2>Sprzedawca:</h2>
						<p>{invoice.sellerCompanyName}</p>
						<p>{invoice.sellerFirstName} {invoice.sellerLastName}</p>
						<p>{invoice.sellerEmail}</p>
						<p>
							ul. {invoice.sellerCompanyStreet}{' '}
							{invoice.sellerCompanyBuildingNumber},{' '}
							{invoice.sellerCompanyPostCode} {invoice.sellerCompanyCity}
						</p>
						<p>NIP: {invoice.sellerCompanyNip}</p>
						<div className='invoice-view-grey'>
							<p>{invoice.sellerCompanyBankName}</p>
							<p>Konto: {invoice.sellerCompanyBankAccountNumber}</p>
						</div>
					</div>

					<div className='invoice-view-companies-buyer-data'>
						<h2>Nabywca:</h2>
						<p>{invoice.buyerCompanyName}</p>
						<p>
							ul. {invoice.buyerCompanyStreet}{' '}
							{invoice.buyerCompanyBuildingNumber},{' '}
							{invoice.buyerCompanyPostCode} {invoice.buyerCompanyCity}
						</p>
						<p>NIP: {invoice.buyerCompanyNip}</p>
						<div className='invoice-view-grey'>
							<p>
								Sposób zapłaty:{' '}
								{invoice.methodOfPayment === 'CASH'
									? 'gotówka'
									: invoice.methodOfPayment === 'CARD'
									? 'karta'
									: 'przelew'}
							</p>
							<p>Termin zapłaty: {invoice.deadlineOfPayment}</p>
						</div>
					</div>
				</div>

				<div className='invoice-view-table'>
					<table>
						<thead className='invoice-view-thead'>
							<tr>
								<th style={{ width: '10px' }}>L.p.</th>
								<th style={{ width: '250px' }}>nazwa towaru / usługi</th>
								<th style={{ width: '70px' }}>ilość</th>
								<th style={{ width: '70px' }}>j.m.</th>
								<th style={{ width: '70px' }}>cena jed.</th>
								<th style={{ width: '100px' }}>wartość netto</th>
								<th style={{ width: '70px' }}>% vat</th>
								<th style={{ width: '100px' }}>kwota vat</th>
								<th style={{ width: '100px' }}>wartość brutto</th>
							</tr>
						</thead>
						<tbody>
							{invoice.getInvoicePositionDtoList.map((position, index) => {
								return (
									<tr key={position.id}>
										<td className='invoice-view-td' style={{ width: '10px' }}>
											{index + 1}.
										</td>
										<td className='invoice-view-td' style={{ width: '250px' }}>
											{position.name}
										</td>
										<td className='invoice-view-td' style={{ width: '70px' }}>
											{position.amount}
										</td>
										<td className='invoice-view-td' style={{ width: '100px' }}>
											{position.unitOfMeasure === 'THOUSAND_PCS' ? 'TYS. SZT.' : position.unitOfMeasure === 'PCS' ? 'SZT.' : position.unitOfMeasure}
										</td>
										<td className='invoice-view-td' style={{ width: '70px' }}>
											{position.unitPrice}
										</td>
										<td className='invoice-view-td' style={{ width: '100px' }}>
											{position.nettoValue}
										</td>
										<td className='invoice-view-td' style={{ width: '70px' }}>
											{position.vatPercent}
										</td>
										<td className='invoice-view-td' style={{ width: '100px' }}>
											{position.vatValue}
										</td>
										<td className='invoice-view-td' style={{ width: '100px' }}>
											{position.bruttoValue}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				<div className='invoice-view-table'>
					<table>
						<thead className='invoice-view-thead'>
							<tr>
								<th style={{ width: '100px' }}>suma netto</th>
								<th style={{ width: '100px' }}>suma vat</th>
								<th style={{ width: '150px' }}>suma brutto</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='invoice-view-td' style={{ width: '100px' }}>
									{invoice.sumNetto}
								</td>
								<td className='invoice-view-td' style={{ width: '100px' }}>
									{invoice.sumVat}
								</td>
								<td className='invoice-view-td' style={{ width: '100px' }}>
									{invoice.sumBrutto}
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='invoice-view-sum'>
					<p>Do zapłaty:</p>
					<p>{invoice.totalToPay} zł</p>
				</div>
			</div>
		</div>
	);
};

export default InvoiceView;
