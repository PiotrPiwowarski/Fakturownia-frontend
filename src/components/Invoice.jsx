import { useNavigate } from "react-router-dom";

const Invoice = ({invoice}) => {
    const navigate = useNavigate(); 

    const onClickView = () => {
        navigate('/invoiceView', {state: {invoice}});
    }

    return (
        <div className="app-form">
            <h2 className="invoice-font">FAKTURA VAT NR 01/2025</h2>
            <p className="invoice-font">Data wystawienia: {invoice.dateOfIssue}</p>
            <p className="invoice-font">Data sprzedaży: {invoice.dateOfSale}</p>
            <div className="invoice">
                <div className="invoice-subject">
                    <h3 className="invoice-font">Sprzedawca</h3>
                    <p className="invoice-font">{invoice.sellerCompanyName}</p>
                </div>
                <div>
                    <h3 className="invoice-font">Nabywca</h3>
                    <p className="invoice-font">{invoice.buyerCompanyName}</p>
                </div>
            </div>
            <button className="app-button" onClick={onClickView}>Podgląd</button>
        </div>
    );
}

export default Invoice;