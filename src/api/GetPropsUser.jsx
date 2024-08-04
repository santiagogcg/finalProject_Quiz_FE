import axios from "./axios"
import Cookies from 'js-cookie';
import Context from "../Context";
import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom'




function GetPropsUser() {

    const { username, newUsername, password, quizCompleted, score, statusAnswers, error, timeSpent, isAuthenticated, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setError, setTimeSpent, setAuthenticated } = useContext(Context)



    useEffect(() => {
        const getUserProps = async () => {


            try {


                if (isAuthenticated) {
                    const response = await axios.get(`/props/${username}`)
                    // console.log(response.data)
                    console.log("Get request para propiedades usuario realizada con éxito")
                    setUsername(response.data.username)
                    setQuizCompleted(response.data.quizCompleted)
                    setScore(response.data.score)
                    setStatusAnswers(response.data.statusAnswers)
                    setTimeSpent(response.data.timeSpent)

                } else {

                    console.log("Token no verificado para poder extraer datos usuario")

                }





            } catch (error) {

                console.log(`message getUserProps:${error}`)

            }



        }

        getUserProps()

    }, [username])



}

export default GetPropsUser

