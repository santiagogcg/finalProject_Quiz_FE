import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import { useNavigate, Navigate } from 'react-router-dom'
import { getRequestAllUsers } from "../api/requestsBackEnd";
import '../App.css'




function Ranking() {

    const navigate = useNavigate()

    const { username, newUsername, password, quizCompleted, score, isAuthenticated, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent, setIsAuthenticated } = useContext(Context)

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        const handleGetAllUsers = async () => {


            try {
                const responseGetAllUsers = await getRequestAllUsers();

                if (responseGetAllUsers.data) {
                    console.log('All Users get request done:', responseGetAllUsers.data);

                    const sortUsers = responseGetAllUsers.data.sort((a, b) => {
                        if (b.score === a.score) {
                            return a.timeSpent - b.timeSpent;
                        }
                        return b.score - a.score;
                    });

                    setAllUsers(sortUsers)




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

            <h2 className="ranking-title">RANKING</h2>

            {allUsers.map((user, index) =>
                <div key={index}>

                    {(user.username === 'user1') &&
                        <div className="rank-item">
                            <h1 className="rank-number">{index + 1}</h1>
                            <h3 className="rank-name"> {user.username}</h3>
                            <img className="rank-photo" src="/images/fisolofo.jpg" alt="Incorrect" />
                            <p>{user.score} puntos</p>
                            {/* <p>{(user.timeSpent / 60).toFixed(2)} min.</p> */}
                        </div>
                    }

                    {(user.username !== 'user1') &&
                        <div className="rank-item">
                            <h1 className="rank-number">{index + 1}</h1>
                            <h3 className="rank-name"> {user.username}</h3>
                            <img className="rank-photo" src="/images/fisolofo.jpg" alt="Incorrect" />
                            <p>{user.score} puntos</p>
                            {/* <p>{(user.timeSpent / 60).toFixed(2)} min.</p> */}
                        </div>
                    }





                </div>)}



        </div>


    )

}



export default Ranking;


