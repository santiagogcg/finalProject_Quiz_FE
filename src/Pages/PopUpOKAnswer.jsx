import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import { useNavigate, Navigate } from 'react-router-dom'
import { getRequestAllUsers } from "../api/requestsBackEnd";




function PopUpOKAnswer() {
    const { username, newUsername, password, quizCompleted, score, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent } = useContext(Context)


    return (
        <div>
            <h1>Ereeeee una máquina {username}</h1>
            <img src="/images/pruebaright.jpg" alt="Incorrect" />
        </div>
    )

}



export default PopUpOKAnswer;


