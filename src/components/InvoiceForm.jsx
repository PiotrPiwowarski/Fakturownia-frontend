import { useState } from 'react';

const InvoiceForm = () => {

	return (
		<div className='invoice'>
			<p>Data wystawienia: 17-01-2025</p>
			<p>Data sprzedaży: 17-01-2025</p>

			<div className='invoice-header'>
				<h1>FAKTURA VAT NR 01/2025</h1>
				<p>oryginał/kopia</p>
			</div>

			<div className='invoice-companies-data'>
				<div className='invoice-companies-seller-data'>
					<h2>Sprzedawca:</h2>
					<p>Zakład usługowy UNIET</p>
					<p>Babice ul. Krakowska 12, 32-600 Oświęcim</p>
					<p>NIP: 549-158-93-92</p>
					<p>REGON: 120009850</p>
					<div className='invoice-grey'>
						<p>Bank PEKAO SA o/Oświęcim</p>
						<p>Konto: 35 1240 4155 1111 0000 4635 1702</p>
					</div>
				</div>

				<div className='invoice-companies-buyer-data'>
					<h2>Nabywca:</h2>
					<p>PACCOR Polska SP. Z O. O.</p>
					<p>ul. Budowlana 6, 41-100 Siemianowice Śląskie</p>
					<p>NIP: 549-00-22-619</p>
					<br />
					<div className='invoice-grey'>
						<p>Sposób zapłaty: przelew</p>
						<p>Termin zapłaty: 16.02.2025</p>
					</div>
				</div>
			</div>

			<div className='invoice-table'>
				<table>
					<thead className='invoice-thead'>
						<tr>
							<th style={{ width: '10px' }}>L.p.</th>
							<th style={{ width: '250px' }}>nazwa towaru / usługi</th>
							<th style={{ width: '70px' }}>ilość</th>
							<th style={{ width: '70px' }}>cena jed.</th>
							<th style={{ width: '100px' }}>wartość netto</th>
							<th style={{ width: '70px' }}>% vat</th>
							<th style={{ width: '100px' }}>kwota vat</th>
							<th style={{ width: '100px' }}>wartość brutto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='invoice-td' style={{ width: '10px' }}>
								1.
							</td>
							<td className='invoice-td' style={{ width: '250px' }}>
								ETYKIETOWANIE - WIECZKA LGPT 795580E51C M&S
							</td>
							<td className='invoice-td' style={{ width: '70px' }}>
								96096
							</td>
							<td className='invoice-td' style={{ width: '70px' }}>
								45,00
							</td>
							<td className='invoice-td' style={{ width: '100px' }}>
								4324,32
							</td>
							<td className='invoice-td' style={{ width: '70px' }}>
								23
							</td>
							<td className='invoice-td' style={{ width: '100px' }}>
								994,59
							</td>
							<td className='invoice-td' style={{ width: '100px' }}>
								5318,91
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='invoice-table'>
				<table>
					<thead className='invoice-thead'>
						<tr>
							<th style={{ width: '100px' }}>suma netto</th>
							<th style={{ width: '100px' }}>suma vat</th>
							<th style={{ width: '150px' }}>suma brutto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='invoice-td' style={{ width: '100px' }}>
								4324,32
							</td>
							<td className='invoice-td' style={{ width: '100px' }}>
								994,59
							</td>
							<td className='invoice-td' style={{ width: '100px' }}>
								5318,91
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='invoice-sum'>
				<p>Do zapłaty:</p>
				<p>5318,91 zł</p>
			</div>

			<div className='invoice-signatures'>
				<div style={{textAlign: 'center'}}>
					<div className='invoice-signature'></div>
					<p>data i podpis nabywcy</p>
				</div>
				<div style={{textAlign: 'center'}}>
					<div className='invoice-signature'></div>
					<p>podpis wystawcy</p>
				</div>
			</div>
		</div>
	);
};

export default InvoiceForm;
