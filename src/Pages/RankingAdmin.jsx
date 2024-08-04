import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import { useNavigate, Navigate } from 'react-router-dom'
import { getRequestAllUsers } from "../api/requestsBackEnd";




function RankingAdmin() {

    const navigate = useNavigate()

    const { username, newUsername, password, quizCompleted, score, isAuthenticated, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent, setIsAuthenticated } = useContext(Context)

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        const handleGetAllUsers = async () => {


            try {
                const responseGetAllUsers = await getRequestAllUsers();

                if (responseGetAllUsers.data) {
                    console.log('All Users get request done:', responseGetAllUsers.data);


                    const sortUsersName = responseGetAllUsers.data.sort((a, b) => {

                        return b.username - a.username;
                    });
                    setAllUsers(sortUsersName)




                } else {

                    console.log('All Users props were not possible to be requested ',);
                }

            } catch (err) {
                console.error('Error getting ALL Users:', err);
            }





            console.log("ALL User props fetched succesfully")
        }
        handleGetAllUsers()

    }, [])


    return (

        <div>

            Lista usuarios
            {allUsers.map((user) =>
                <div key={user._id}>

                    <h2> {user.username}</h2>
                    <p>{user.score}</p>
                    <p>{user.timeSpent}</p>



                </div>)}



        </div>


    )

}



export default RankingAdmin;


