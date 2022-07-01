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
        let temp = await axios.get(process.env.REACT_APP_S3_ASSET_URL + 'Companies/working-experience.json');
        return temp.data.data
    } catch (error) {
        console.log("error 19")
    }
}