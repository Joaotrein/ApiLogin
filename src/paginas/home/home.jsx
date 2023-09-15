import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../componentes/Card/Card";

function Home(props) {
    const navigate = useNavigate();
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/');
    };

    const pegarNoticias = async () => {
        try {
            const response = await axios.get('http://localhost:8000/news');
            setNoticias(response.data); // Define o estado com os dados da resposta
        } catch (error) {
            console.error("Erro ao buscar notícias:", error);
        }
    };

    useEffect(() => {
        pegarNoticias();
    }, []);

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <p>home</p>


            {noticias.map((noticia, index) => (
                <Card
                    title={noticia.title}
                    content={noticia.content}
                    i={index}
                />
            ))}
        </>
    );
}

export default Home;
