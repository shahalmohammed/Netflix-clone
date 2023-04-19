import axios from "axios";
import { baseurl } from "../Constance/Constance";
 const instance = axios.create(
    {
        baseURL:baseurl,
    }
 )
 export default instance;