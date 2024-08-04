import { Navigate, useNavigate, Outlet } from "react-router-dom"
import { useEffect, useContext } from "react"
import Home from "./Pages/Home"
import Context from "./Context"
import Cookies from 'js-cookie';
import axios from 'axios'
import Authentification from "./api/RequestsValidateToken";





function ProtectedRoutesAdmin() {
    const { username, isAuthenticated, setIsAuthenticated } = useContext(Context)






    console.log(isAuthenticated)



    return (
        <div>

            {isAuthenticated & username == "admin" ? <Outlet /> : <Navigate to='/login' replace={true} />}

        </div>
    )
}










export default ProtectedRoutesAdmin