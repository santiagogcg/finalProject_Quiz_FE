import axios from 'axios'


const instance = axios.create({

    baseURL: 'https://finalproject-quiz-be.onrender.com/api',
    withCredentials: true

})

export default instance
