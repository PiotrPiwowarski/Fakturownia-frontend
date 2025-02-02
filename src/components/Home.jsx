import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const onClickLoginButton = () => {
        navigate('/login');
    }

    const onClickRegisterButton = () => {
        navigate('/userRegister');
    }

    return (
        <div className="app">
            <h1>FAKTUROWNIA</h1>
            <div className="app-form">
                <h2>Dzień dobry!</h2>
                <button className="app-button" onClick={onClickLoginButton}>Zaloguj się</button>
                <button className="app-button" onClick={onClickRegisterButton}>Zarejestruj się</button>
            </div>
        </div>
    );
}

export default Home;