import InvoiceView from './components/InvoiceView';
import Home from './components/Home';
import Login from './components/Login';
import AddCompany from './components/AddCompany';
import UserRegister from './components/UserRegister';
import YourInvoices from './components/YourInvoices';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourCompanies from './components/YourCompanies';
import CreateInvoice from './components/CreateInvoice';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/userRegister' element={<UserRegister />} />
        <Route path='/addCompany' element={<AddCompany />}/>
        <Route path='/yourCompanies' element={<YourCompanies />}/>
        <Route path='/yourInvoices' element={<YourInvoices />} />
        <Route path='/invoiceView' element={<InvoiceView />}/>
        <Route path='/createInvoice' element={<CreateInvoice />}/>
      </Routes>
    </Router>
  );
}

export default App;
