import MenuBar from './MenuBar';
import {useState, useEffect} from 'react';

const YourCompanies = () => {

    useEffect(() => {

    }, []);

    const [yourCompanies, setYourCompanies] = useState([]);
    return (
        <div  className="app main">
			<MenuBar />

		</div>
    );
}

export default YourCompanies;