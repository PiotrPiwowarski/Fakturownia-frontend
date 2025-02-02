import InvoiceForm from './components/InvoiceForm';
import Home from './components/Home';
import Login from './components/Login';
import CompanyRegister from './components/CompanyRegister';
import UserRegister from './components/UserRegister';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/userRegister' element={<UserRegister />} />
        <Route path='/companyRegister' element={<CompanyRegister />}/>
        <Route path='/main' element={<Main />} />
        <Route path='/invoiceForm' element={<InvoiceForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
