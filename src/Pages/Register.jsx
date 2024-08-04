import { useContext } from "react";
import Context from "../Context";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";


function Register() {

  const { username, newUsername, password, quizCompleted, score, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent } = useContext(Context)

  const navigate = useNavigate()


  // const handleUpdate = async (e) => {



  //   e.preventDefault();

  //   navigate('/updatePropsUser')
  //   // <Navigate to='/updatePropsUser' replace={true} />
  // }



  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: newUsername,
      password,
      quizCompleted,
      score,
      statusAnswers,
      timeSpent
    };

    try {
      const response = await axios.post('http://localhost:3000/api/register', userData);
      console.log('User created:', response.data);
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              required
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
              required
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
              required

            />
          </label>
        </div>
        <button type="submit">Submit</button>
        {/* <button onClick={handleUpdate} >Go to Update User</button> */}

      </form>


    </div>
  );



};

export default Register
