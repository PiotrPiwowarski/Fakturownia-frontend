import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const handleLoginBtn = () => {
        navigate('/login');
    }

    const handleRegisterBtn = () => {
        navigate('/userRegister');
    }

    return (
        <div className="app">
            <h1 className="app-h1-white">FAKTUROWNIA</h1>
            <div className="app-form">
                <h2>Dzień dobry!</h2>
                <button className="app-button" onClick={handleLoginBtn}>Zaloguj się</button>
                <button className="app-button" onClick={handleRegisterBtn}>Zarejestruj się</button>
            </div>
        </div>
    );
}

export default Home;