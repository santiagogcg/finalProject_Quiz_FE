import axios from "./axios"
import Cookies from 'js-cookie';
import Context from "../Context";
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from 'react-router-dom'




// const loginRequest = (user) => axios.post('/login', user)
// const registerRequest = (user) => axios.post('/register', user)
// const verifyRequest = () => axios.get('/verifyToken')

function Authentification() {
    const { isAuthenticated, setIsAuthenticated, setUsername, username } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        const authenticate = async () => {
            console.log("Checking token in session storage");

            try {
                const token = sessionStorage.getItem('token');
                console.log(`Token in session storage: ${token}`);

                if (token) {
                    console.log('Token EXISTS');
                    const response = await axios.get('/verifyToken', { withCredentials: true });

                    console.log(response.data);

                    if (response.data) {
                        console.log("Token exists & verification OK");
                        setIsAuthenticated(true);
                        setUsername(response.data.username);
                        // navigate('/Home', { replace: true }); // Use navigate for routing
                        <Outlet />
                    } else {
                        console.log("Token exists but verification NOK");
                        setIsAuthenticated(false);
                        navigate('/login', { replace: true }); // Use navigate for routing
                    }
                } else {
                    console.log("No token found");
                    navigate('/login', { replace: true }); // No token means need to log in
                }

            } catch (error) {
                console.log({ "Verification Token NOK": error });
                setIsAuthenticated(false);
                navigate('/login', { replace: true }); // Navigate to login on error
            }
        };

        authenticate();
    }, []); // Add navigate to dependencies

    // useEffect(() => {


    //     const authentification = async () => {

    //         const cookies = Cookies.get();




    //         console.log("chequeando token en session storage")



    //         try {

    //             const token = sessionStorage.getItem('token');
    //             console.log(`'token en session storage:'${token}`)





    //             if (token) {
    //                 sessionStorage.setItem('token', token);
    //                 console.log('token EXISTE');
    //                 const response = await axios.get('/verifyToken', {

    //                     withCredentials: true
    //                 })

    //                 console.log(response.data)

    //             }



    //             if (!response.data) {

    //                 console.log("token  existe pero verificación NOK");
    //                 return
    //                 < Navigate to='/login' replace={true} />

    //                 setIsAuthenticated(false)






    //             }
    //             else {

    //                 console.log(" token  existe & verificación OK")


    //                 setIsAuthenticated(true)
    //                 setUsername(response.data.username)
    //                 return
    //                 < Navigate to='/Home' replace={true} />



    //             }




    //         } catch (error) {
    //             console.log({ "Verifiación Token NOK": error })
    //             return
    //             setIsAuthenticated(false)




    //         }

    //     }

    //     authentification()

    // }, [])

}


export default Authentification


