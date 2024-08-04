import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import { useNavigate, Navigate } from 'react-router-dom'
import { getRequestAllUsers } from "../api/requestsBackEnd";




function PopUpNOKAnswer() {
    const { username, newUsername, password, quizCompleted, score, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent } = useContext(Context)


    return (
        <div>
            <h1>UFFFFF incorrecta!No pasa nada sigue intentándolo</h1>
            <img src="/images/pruebafail.jpg" alt="Incorrect" />
        </div>
    )

}



export default PopUpNOKAnswer;


