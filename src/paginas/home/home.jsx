import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            home

        </>
    )

}

export default Home