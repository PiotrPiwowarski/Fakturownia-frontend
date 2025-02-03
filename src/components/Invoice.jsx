

const Invoice = () => {

    const onClickView = () => {

    }

    return (
        <div className="app-form">
            <h2 className="invoice-font">FAKTURA VAT NR 01/2025</h2>
            <p className="invoice-font">Data wystawienia: 17-01-2025</p>
            <p> className="invoice-font"Data sprzedaży: 17-01-2025</p>
            <div className="invoice">
                <div className="invoice-subject">
                    <h3 className="invoice-font">Sprzedawca</h3>
                    <p className="invoice-font">Zakład usługowy UNIET</p>
                </div>
                <div>
                    <h3 className="invoice-font">Nabywca</h3>
                    <p className="invoice-font">PACCOR Polska sp. z o.o.</p>
                </div>
            </div>
            <button className="app-button" onClick={onClickView}>Podgląd</button>
        </div>
    );
}

export default Invoice;