import axios from 'axios'
const api=axios.create({
    withCredentials:true,
    baseURL:"http://localhost:8000"
})
export const login=(data)=>api.post("/api/login",data)
export const register=(data)=>api.post("/api/register",data)
export const profile=()=>api.get("/api/profile")
export const logout=()=>api.get("/api/logout")
export const avatar=(data)=>api.post("/api/avatar",data)
export const sendcomment=(data)=>api.post("/api/sendcomment",data)
//  interceptors
api.interceptors.response.use((config)=>{return config}, async (error)=>{
    const originalRequest=error.config
    if(error?.response?.status===401 && originalRequest && !originalRequest._isRetry){
        originalRequest._isRetry=true
        try {
            await axios.get('http://localhost:8000/api/refresh',{withCredentials:true})
            return api.request(originalRequest)
        } catch (error) {
            console.log(error)
        }
    }
    throw error
})
export default api;