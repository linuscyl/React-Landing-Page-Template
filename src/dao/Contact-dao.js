import axios from "axios"

export const sendEmailToLinusMailClient = async(name, email, message) =>{
    try {
        await axios.post(process.env.REACT_APP_API_GATEWAY_WORKING_EXPERIENCE + 'send-email', {
            name: name,
            email: email,
            message: message
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch (error) {
        console.log("error")
    }
}