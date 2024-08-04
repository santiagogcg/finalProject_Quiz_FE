import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom'
import { updateRequest } from "../api/requestsBackEnd";



function RefreshPage() {

    const navigate = useNavigate()

    const { username, newUsername, password, quizCompleted, score, isAuthenticated, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent, setIsAuthenticated } = useContext(Context)


    useEffect(() => {

        const refreshPage = () => {
            { (isAuthenticated & quizCompleted & username !== "admin") && (navigate('./Home')) }
            { (isAuthenticated & quizCompleted & username == "admin") && (navigate('./HomeAdmin')) }
            { (isAuthenticated & !quizCompleted & username !== "admin") && (navigate('./Home')) }
            { (isAuthenticated & !quizCompleted & username == "admin") && (navigate('./HomeAdmin')) }
            { (!isAuthenticated) && (navigate('./login')) }
        }

        refreshPage()

    }, [])

}



export default RefreshPage;










