import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPro from './components/dashboard/DashboardPro';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import PasswordForgot from './components/password/PasswordForgot';
import PasswordReset from './components/password/PasswordReset';
import PasswordResetFailure from './components/password/PasswordResetFailure';
import PasswordResetSuccess from './components/password/PasswordResetSuccess';
import ChoosePlan from './components/registration/ChoosePlan';
import DashboardLite from './components/dashboard/DashboardLite';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/passwordForgot' element={<PasswordForgot />} />
				<Route path='/passwordReset' element={<PasswordReset />} />
				<Route path='/dashboardPro' element={<DashboardPro />} />
				<Route path='/dashboardLite' element={<DashboardLite />} />
				<Route path='/passwordResetFailure' element={<PasswordResetFailure />} />
				<Route path='/passwordResetSuccess' element={<PasswordResetSuccess/>} />
				<Route path='/choosePlan' element={<ChoosePlan />} />
			</Routes>
		</Router>
	);
};

export default App;
