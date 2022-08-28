import axios from "axios"

export const getEducation = async() =>{
    try {
        let result = await axios.get(process.env.REACT_APP_S3_ASSET_URL + `Education/education.json`);
        return result.data.data
    } catch (error) {
        console.log("error");
        window.location = '/page-not-found'
    }
}