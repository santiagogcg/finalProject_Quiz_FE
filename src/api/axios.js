import axios from 'axios'


const instance = axios.create({

    baseURL: `${PORT}/api`,
    withCredentials: true

})

export default instance
