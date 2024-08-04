import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import { useNavigate } from 'react-router-dom'
import { updateRequest, postRequestLogOut } from "../api/requestsBackEnd";
import Cookies from 'js-cookie'
import Ranking from "./Ranking";
import PopUpNOKAnswer from "./PopUpNOKAnswer";
import PopUpOKAnswer from "./PopUpOKAnswer";
import InfoBoda from "./InfoBoda";
import '../App.css'



function Home() {

    const navigate = useNavigate()

    const { allUsers, username, newUsername, password, quizCompleted, score, statusAnswers, timeSpent, setUsername, setNewUsername, setPassword, setQuizCompleted, setScore, setStatusAnswers, setTimeSpent } = useContext(Context)

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [counterIsRunning, setCounterIsRunning] = useState(false);
    const [popUpNOK, setPopUpNOK] = useState(false);
    const [popUpOK, setPopUpOK] = useState(false);


    const questions = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: 'Berlin', isCorrect: false },
                { text: 'Madrid', isCorrect: false },
                { text: 'Paris', isCorrect: true },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: 'Earth', isCorrect: false },
                { text: 'Mars', isCorrect: true },
                { text: 'Jupiter', isCorrect: false },
            ]
        },
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: 'Elephant', isCorrect: false },
                { text: 'Blue Whale', isCorrect: true },
                { text: 'Giraffe', isCorrect: false },
            ]
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: [
                { text: 'Charles Dickens', isCorrect: false },
                { text: 'Jane Austen', isCorrect: false },
                { text: 'William Shakespeare', isCorrect: true },
            ]
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                { text: 'H2O', isCorrect: true },
                { text: 'O2', isCorrect: false },
                { text: 'CO2', isCorrect: false },
            ]
        },
    ];



    useEffect(() => {
        let interval = null;

        if (counterIsRunning) {
            interval = setInterval(() => {
                setTimeSpent(prevTime => prevTime + 0.1); // Increment time by 0.1 seconds
            }, 100); // Update every 100ms to allow for decimal points
        } else if (!counterIsRunning && timeSpent !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [counterIsRunning, timeSpent]);


    const handleCounter = () => {

        setCounterIsRunning(true)

    }

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            setStatusAnswers(statusAnswers + '1')
            setPopUpOK(true);
            setTimeout(() => {
                setPopUpOK(false);
            }, 3000);

        } else {
            setStatusAnswers(statusAnswers + '0')
            setPopUpNOK(true);
            setTimeout(() => {
                setPopUpNOK(false);
            }, 3000);


        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {

            setQuizCompleted('true');
            setCounterIsRunning(false)


        }
    };


    if (quizCompleted == 'true') {


        const response = updateRequest(username, {
            username: username,
            quizCompleted: quizCompleted,
            score: score,
            statusAnswers: statusAnswers,
            timeSpent: timeSpent
        })
    }

    const handleLogOut = () => {




        // postRequestLogOut()
        Cookies.remove('token')
        navigate('/login')

    }


    const handleInfoBoda = () => {





        navigate('/infoboda')

    }



    // return (
    //     <div>
    //         <h1>¡Gracias por participar {username}!</h1>
    //         <button >¿Consultas? </button>
    //         <button >¡INFO BODA!</button>
    //         <button onClick={handleLogOut}>Cerrar Sesión</button>
    //         <Ranking />
    //         <h2>Tu puntuación es: {score} de {questions.length}</h2>
    //     </div>
    // );


    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>

            {popUpNOK &&

                <PopUpNOKAnswer />

            }

            {popUpOK &&

                <PopUpOKAnswer />

            }

            {(counterIsRunning) &&
                <div>
                    <p>{timeSpent.toFixed(2)}</p>
                    <h2>{currentQuestion.question}</h2>
                    <div>
                        {currentQuestion.answers.map((answer, index) => (
                            <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>

            }

            {((quizCompleted == 'false') && (!counterIsRunning)) && <h1>
                <button onClick={handleCounter}>¡Empezar Cuestonario!</button>
            </h1>}

            {(quizCompleted == 'true') &&
                <div>
                    <nav><button className="logout-button" onClick={handleLogOut}>Cerrar Sesión</button></nav>
                    <h1>¡Gracias por participar {username}! </h1>
                    {/* <button >¿Consultas? </button> */}
                    <button className="infoboda-button" onClick={handleInfoBoda}>¡INFO BODA!</button>
                    <Ranking />
                    <h2>Tu puntuación es: {score} de {questions.length}</h2>
                </div>
            }





        </div>
    );
};

export default Home;










