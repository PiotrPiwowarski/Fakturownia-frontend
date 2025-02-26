import Home from './components/home/Home';
import InvoiceView from './components/InvoiceView';
import AddCompany from './components/AddCompany';
import MyInvoices from './components/MyInvoices';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateInvoice from './components/CreateInvoice';
import MyAccount from './components/MyAccount';
import Dashboard from './components/Dashboard';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/addCompany' element={<AddCompany />} />
				<Route path='/myInvoices' element={<MyInvoices />} />
				<Route path='/invoiceView' element={<InvoiceView />} />
				<Route path='/createInvoice' element={<CreateInvoice />} />
				<Route path='/myAccount' element={<MyAccount />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	);
};

export default App;
