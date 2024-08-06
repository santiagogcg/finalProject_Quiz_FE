import { useContext, useEffect } from "react";
import Context from "../Context";
import axios from '../api/axios';
import { Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';






function Login() {

    const { username, loginUsername, password, isAuthenticated, setUsername, setLoginUsername, setPassword, error, setError, setIsAuthenticated } = useContext(Context)


    const navigate = useNavigate();
    const cookies = Cookies.get();



    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     navigate('/register')
    // }



    // const handleHome = async (e) => {
    //     e.preventDefault();
    //     navigate('/Home')


    // }

    // const handleHomeAdmin = async (e) => {
    //     e.preventDefault();
    //     navigate('/homeAdmin')


    // }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const userData = {
            username,
            password
        };

        try {
            const response_token = await axios.post('/login', userData, {

                withCredentials: true
            });

            if (response_token) {
                console.log(response_token.data)
                console.log(`usuario:${username},Auntenticado:${isAuthenticated}`)


                response_token.data.username === "admin" ? navigate('/HomeAdmin') : navigate('/Home')
            } else {
                console.log("Tras intento logear no ha sido posible obtener token y autenticarlo")

            }




        } catch (err) {
            console.error('Error login user:', err);
            setError("Usuario o contraseña incorrecta")
        }
    };

    return (
        <div>


            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>


                {/* <button onClick={handleHome}>A home</button>
                <button onClick={handleHomeAdmin}>A home Admin</button>
                <button onClick={handleRegister}>A Register</button> */}



            </form>

        </div>

    );



};

export default Login
