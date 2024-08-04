import React, { useState } from 'react'
import { Context } from './Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProtectedRoutes from './ProtectedRoutes'
import ProtectedRoutesAdmin from './ProtectedRoutesAdmin'
import Home from './Pages/Home'
import HomeAdmin from './Pages/HomeAdmin'
import Authentification from './api/RequestsValidateToken'
import UpdatePropsUser from './Pages/UpdatePropsUser'
import GetPropsUser from './api/GetPropsUser'
import Ranking from './Pages/Ranking'
import RefreshPage from './Pages/RefreshPage'
import RankingAdmin from './Pages/RankingAdmin'
import InfoBoda from './Pages/InfoBoda'



import './App.css'


function App() {

  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [password, setPassword] = useState('');
  const [quizCompleted, setQuizCompleted] = useState("false");
  const [score, setScore] = useState(0);
  const [statusAnswers, setStatusAnswers] = useState(0)
  const [timeSpent, setTimeSpent] = useState(0)
  const [error, setError] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)



  return (
    <div>
      <Context.Provider value={{ username, newUsername, password, quizCompleted, score, statusAnswers, timeSpent, error, isAuthenticated, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent, setError, setIsAuthenticated }}>

        <Router>
          <Authentification />
          <GetPropsUser />

          <Routes>

            <Route path='/login' element={<Login />} />

            <Route element={<ProtectedRoutes />} >

              <Route path='/Home' element={<Home />} />
              <Route path='/infoboda' element={<InfoBoda />} />



            </Route>

            <Route element={<ProtectedRoutesAdmin />} >

              <Route path='/homeAdmin' element={<HomeAdmin />} />
              <Route path='/register' element={<Register />} />
              <Route path='/updatePropsUser' element={<UpdatePropsUser />} />
              <Route path='/rankingAdmin' element={<RankingAdmin />} />


            </Route>








          </Routes>





        </Router>






      </Context.Provider>


    </div>


  )



};

export default App
