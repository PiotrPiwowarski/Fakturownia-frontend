import { ReactComponent as Logo } from '../../img/logo.svg';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import useStore from '../useStore';

const PasswordForgot = () => {

    const navigate = useNavigate();

    const { url } = useStore();

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

	const handleLogoBtn = () => {
        navigate('/')
    };

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleResetBtn = async () => {
        try {
            await axios.post(`${url}/api/users/sendResetPasswordToken`, { email }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            navigate('/passwordReset');
            localStorage.setItem('resetTokenEmail', email);
            setError('');
        } catch(e) {
            setError('Błąd resetowania hasła');
        }
    }

	return (
		<div className={styles.bgc}>
			<div className={styles.header}>
				<button className={styles.logoButton} onClick={handleLogoBtn}>
					<Logo className={styles.logo} />
				</button>
			</div>
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.form}>
						<h1>Ustawmy nowe.</h1>
						<p className={styles.error}>{error}</p>
						<label>
							Email
							<input type='email' value={email} onChange={handleEmailInput} />
						</label>
						<button className={styles.loginBtn} onClick={handleResetBtn}>
							Ustaw nowe hasło
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordForgot;
