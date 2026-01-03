import { apiProcessor } from "../../services/api"
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const bookApiEP = `${apiBaseUrl}/api/v1/books`

export const postNewBookApi = async (payload)=>{
    try {
        const obj = {
            url :bookApiEP ,
            method :"post",
            showToast:true,
            isPrivateCall : true,
            payload
    
        }
        const result = await apiProcessor(obj)
        return result
        
    } catch (error) {
        console.log(error)
        
    }
}
//for admin 
export const AdminFetchBookApi = async ()=>{
    try {
        const obj = {
            url :bookApiEP + "/admin",
            method :"get",
            isPrivateCall : true
        }
        const result = await apiProcessor(obj)
        return result
        
    } catch (error) {
        console.log(error)
        
    }
}