import axios from "axios"

export const sendEmailToLinusMailClient = async(name, email, message) =>{
    try {
        let result = await axios.post(process.env.REACT_APP_API_GATEWAY_WORKING_EXPERIENCE + 'send-email', {
            name: name,
            email: email,
            message: message
          })
        return result
    } catch (error) {
        alert('Network Error. Please try again later')
        console.log("error")
    }
}