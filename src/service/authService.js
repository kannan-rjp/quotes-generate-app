import axios from 'axios'

const BASE_URL = 'https://reqres.in/api'
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

class AuthService{
    async getLogged(postData){
        console.log('service postdat',postData)
        try{
            const  data  = await axiosInstance.post('/login',postData)
            console.log(data,'service page')
            return data;
        }
        catch(e){
            throw e;
        }
    }
}

export const authService = new AuthService();