import axios from "./axios"
import Cookies from 'js-cookie';
import Context from "../Context";
import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom'


const updateRequest = (user, dataUpdate) => axios.put(`/props/${user}`, dataUpdate)

const getRequest = (user) => axios.get(`/props/${user}`)

const getRequestAllUsers = () => axios.get('/props')

const postRequestLogOut = () => axios.post('/logout')





export { updateRequest, getRequest, getRequestAllUsers, postRequestLogOut }