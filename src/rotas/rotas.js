import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../paginas/login/login'
import Home from '../paginas/home/home'


function Rotas(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas