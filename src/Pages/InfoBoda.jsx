import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import { useNavigate, Navigate } from 'react-router-dom'
import { getRequestAllUsers } from "../api/requestsBackEnd";




function InfoBoda() {

    const navigate = useNavigate()

    const { username, newUsername, password, quizCompleted, score, isAuthenticated, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent, setIsAuthenticated } = useContext(Context)






    return (

        <div>

            <h1>INFO EVENTO</h1>


        </div>


    )

}



export default InfoBoda;


