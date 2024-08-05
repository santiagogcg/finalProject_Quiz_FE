import axios from 'axios'


const instance = axios.create({

    baseURL:

        // 'http://localhost:3000/api',
        'https://finalproject-quiz-be.onrender.com/api',
    withCredentials: true

})

export default instance
