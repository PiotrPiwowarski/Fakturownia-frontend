import styles from './Invoice.module.css';
import PrinterIcon from '../../img/PrinterIcon';
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from 'react';

const InvoiceView = ({ invoice }) => {
	const contentRef = useRef();

	const handlePrint = useReactToPrint({ contentRef });

	return (
		<div>
			<button
				className={styles.printBtn}
				onClick={handlePrint}>
				<PrinterIcon onClick={() => handlePrint()} />
			</button>
			<div
				className={styles.invoiceView}
				ref={contentRef}>
				<div className={styles.dates}>
					<p>Data wystawienia: {invoice.dateOfIssue}</p>
					<p>Data sprzedaży: {invoice.dateOfSale}</p>
				</div>
				<div className={styles.header}>
					<h1>Faktura VAT NR {invoice.invoiceNumber}</h1>
				</div>
				<div className={styles.companies}>
					<div className={styles.subject}>
						<h2>Sprzedawca:</h2>
						<p>{invoice.sellerCompanyName}</p>
						<div>
							<p>{invoice.sellerFirstName}</p>
							<p>{invoice.sellerLastName}</p>
						</div>
						<p>{invoice.sellerEmail}</p>
						<div>
							<p>{invoice.sellerCompanyStreet}</p>
							<p>{invoice.sellerCompanyBuildingNumber}</p>
						</div>
						<div>
							<p>{invoice.sellerCompanyPostCode}</p>
							<p>{invoice.sellerCompanyCity}</p>
						</div>
						<p>NIP: {invoice.sellerCompanyNip}</p>
						<p>{invoice.sellerCompanyBankName}</p>
						<p>{invoice.sellerCompanyBankAccountNumber}</p>
					</div>
					<div className={styles.subject}>
						<h2>Nabywca:</h2>
						<p>{invoice.buyerCompanyName}</p>
						<div>
							<p>{invoice.buyerCompanyStreet}</p>
							<p>{invoice.buyerCompanyBuildingNumber}</p>
						</div>
						<div>
							<p>{invoice.buyerCompanyPostCode}</p>
							<p>{invoice.buyerCompanyCity}</p>
						</div>
						<p>NIP: {invoice.buyerCompanyNip}</p>
						<p>
							Sposób zapłaty:{' '}
							{invoice.methodOfPayment === 'TRANSFER'
								? 'przelew'
								: invoice.methodOfPayment === 'CARD'
								? 'karta'
								: 'gotówka'}
						</p>
						<p>Termin Zapłaty {invoice.deadlineOfPayment}</p>
					</div>
				</div>

				<div className={styles.productTable}>
					<table>
						<thead>
							<tr>
								<th>Nazwa</th>
								<th>Ilość</th>
								<th>J. m.</th>
								<th>Cena j.</th>
								<th>Wartość netto</th>
								<th>% vat</th>
								<th>Kwota vat</th>
								<th>Wartość brutto</th>
							</tr>
						</thead>
						<tbody>
							{invoice.getInvoicePositionDtoList.map((p) => (
								<tr>
									<td>{p.name}</td>
									<td>{p.amount}</td>
									<td>{p.unitOfMeasure}</td>
									<td>{p.unitPrice}</td>
									<td>{p.nettoValue}</td>
									<td>{p.vatPercent}</td>
									<td>{p.vatValue}</td>
									<td>{p.bruttoValue}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className={styles.productTable}>
					<table>
						<thead>
							<tr>
								<th>suma netto</th>
								<th>suma vat</th>
								<th>suma brutto</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{invoice.sumNetto}</td>
								<td>{invoice.sumVat}</td>
								<td>{invoice.sumBrutto}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className={styles.sum}>
					<div className={styles.bgc}>W sumie do zapłaty: </div>
					<div>{invoice.sumBrutto}</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceView;
