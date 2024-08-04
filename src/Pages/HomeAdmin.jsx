import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { updateRequest } from "../api/requestsBackEnd";
import Ranking from "./Ranking";
import Home from "./Home";
import { getRequestAllUsers } from "../api/requestsBackEnd";




function HomeAdmin() {
    const [allUsers, setAllUsers] = useState([])

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        navigate('/register')
    }

    const handleUpdate = async (e) => {


        e.preventDefault();

        navigate('/updatePropsUser')
        // <Navigate to='/updatePropsUser' replace={true} />
    }




    const handleGetAllUsers = () => {




        navigate('/rankingAdmin')




    }










    return (
        <div>

            <button onClick={handleRegister}>Register new User</button>
            <button onClick={handleUpdate} >Go to Update User</button>
            <button onClick={handleGetAllUsers} >Get All Users Props</button>


            <Home />

        </div>

    );



};

export default HomeAdmin
