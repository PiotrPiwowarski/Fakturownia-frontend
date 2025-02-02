

const Main = () => {
    return (
        <div>
            <h2>Główny ekran aplikacji</h2>
            {console.log(localStorage.getItem("jwt"))}
            {console.log(localStorage.getItem("userId"))}
            {console.log(localStorage.getItem("role"))}
        </div>
    );
}

export default Main;