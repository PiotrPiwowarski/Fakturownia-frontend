import InvoiceView from './components/InvoiceView';
import AddCompany from './components/AddCompany';
import MyInvoices from './components/MyInvoices';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateInvoice from './components/CreateInvoice';
import MyAccount from './components/MyAccount';
import Dashboard from './components/Dashboard';
import Login from './components/home/Login';
import Registration from './components/home/Registration';
import PasswordForgot from './components/home/PasswordForgot';
import PasswordReset from './components/home/PasswordReset';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/passwordForgot' element={<PasswordForgot />} />
				<Route path='/passwordReset' element={<PasswordReset />} />
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
