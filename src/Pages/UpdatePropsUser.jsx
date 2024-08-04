import { useContext, useEffect } from "react";
import Context from "../Context";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
// import { getUserProps } from "../api/getUserProps";
import { updateRequest, getRequest } from "../api/requestsBackEnd";





function UpdatePropsUser() {

    const navigate = useNavigate()

    const { username, newUsername, password, quizCompleted, score, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent } = useContext(Context)

    useEffect(() => {
        const handleGetNewUser = async () => {



            try {
                const responseGetNewUser = await getRequest(newUsername);

                if (responseGetNewUser.data) {
                    console.log('NewUser get request done:', responseGetNewUser.data);
                    setNewUsername(responseGetNewUser.data.username),
                        setPassword(),
                        setQuizCompleted(responseGetNewUser.data.quizCompleted),
                        setScore(responseGetNewUser.data.score),
                        setStatusAnswers(responseGetNewUser.data.statusAnswers),
                        setTimeSpent(responseGetNewUser.data.timeSpent)

                } else {

                    console.log('NewUser props was not possible to be requested as does not exist on DB',);
                }

            } catch (err) {
                console.error('Error updating user:', err);
            }
        };

        handleGetNewUser()

    }, [newUsername])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username: newUsername,
            quizCompleted: quizCompleted,
            score: score,
            statusAnswers: statusAnswers,
            timeSpent: timeSpent
        };

        try {
            const response = await updateRequest(newUsername, userData);

            if (response.data) {
                console.log('User updated:', response.data);
            } else {

                console.log('User was not possible to get up to date as does not exist on DB',);
            }

        } catch (err) {
            console.error('Error updating user:', err);
        }
    };

    return (
        <div>

            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            placeholder="El nombre de usuario debe existir en base de datos"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Quiz Completed?:
                        <input
                            type="text"
                            value={quizCompleted}
                            onChange={(e) => setQuizCompleted(e.target.value)}

                        />
                    </label>
                </div>
                <div>
                    <label>
                        Score:
                        <input
                            type="number"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}

                        />
                    </label>
                </div>
                <div>
                    <label>
                        Status Answers:
                        <input
                            type="text"
                            value={statusAnswers}
                            onChange={(e) => setStatusAnswers(e.target.value)}


                        />
                    </label>
                </div>
                <div>
                    <label>
                        Time Spent:
                        <input
                            type="number"
                            value={timeSpent}
                            onChange={(e) => setTimeSpent(e.target.value)}


                        />
                    </label>
                </div>
                <button type="submit">Submit Update</button>


            </form>


        </div>
    );



};

export default UpdatePropsUser
