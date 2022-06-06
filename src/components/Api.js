import axios from "axios";

export const  Api = async() => {
    try {
        let response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
        return response.data.message
    } catch (error) {
        console.log("apiError :", error)
    }
}