import axios from "axios"

export const getThingsFromAPILambdaDynamoDB = async() =>{
    try {
        await axios.get('https://tiu7vmsr0e.execute-api.ap-east-1.amazonaws.com/prod').then((response)=>{
            console.log('response', response);
        })
    } catch (error) {
        
    }
}

export const getWorkingExperience = async() =>{
    try {
        let result = await axios.get(process.env.REACT_APP_S3_ASSET_URL + 'Companies/working-experience.json');
        return result.data.data
    } catch (error) {
        console.log("error")
    }
}

export const getProjects = async(companyName) =>{
    try {
        let result = await axios.get(process.env.REACT_APP_S3_ASSET_URL + `Projects/${companyName}.json`);
        return result.data
    } catch (error) {
        console.log("error")
    }
}