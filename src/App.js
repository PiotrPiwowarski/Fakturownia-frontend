import InvoiceView from './components/InvoiceView';
import Home from './components/Home';
import Login from './components/Login';
import AddCompany from './components/AddCompany';
import UserRegister from './components/UserRegister';
import MyInvoices from './components/MyInvoices';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateInvoice from './components/CreateInvoice';
import MyAccount from './components/MyAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/userRegister' element={<UserRegister />} />
        <Route path='/addCompany' element={<AddCompany />} />
        <Route path='/myInvoices' element={<MyInvoices />} />
        <Route path='/invoiceView' element={<InvoiceView />}/>
        <Route path='/createInvoice' element={<CreateInvoice />}/>
        <Route path='/myAccount' element={<MyAccount />}/>
      </Routes>
    </Router>
  );
}

export default App;
