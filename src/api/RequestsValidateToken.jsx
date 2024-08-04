import axios from "./axios"
import Cookies from 'js-cookie';
import Context from "../Context";
import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom'




// const loginRequest = (user) => axios.post('/login', user)
// const registerRequest = (user) => axios.post('/register', user)
// const verifyRequest = () => axios.get('/verifyToken')

function Authentification() {
    const { isAuthenticated, setIsAuthenticated, setUsername } = useContext(Context)

    useEffect(() => {


        const authentification = async () => {

            const cookies = Cookies.get();
            console.log("chequeando cookies")


            try {

                if (!cookies.token) {
                    console.log("No localizado token en cookies")


                    setIsAuthenticated(false)

                }
                else if (cookies.token) {


                    const response_verify = await axios.get('/verifyToken', {

                        withCredentials: true
                    })



                    if (!response_verify.data) {

                        console.log("token  existe pero verificación NOK");

                        return
                        < Navigate to='/login' replace={true} />

                        setIsAuthenticated(false)





                    }
                    else {

                        console.log(" token  existe & verificación OK")


                        setIsAuthenticated(true)
                        setUsername(response_verify.data.username)
                        return
                        < Navigate to='/Home' replace={true} />



                    }

                }


            } catch (error) {
                console.log({ "Verifiación Token NOK": error })
                return
                setIsAuthenticated(false)




            }
        }

        authentification()

    }, [])

}


export default Authentification


