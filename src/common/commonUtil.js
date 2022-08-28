import * as dayjs from 'dayjs'

export const convertTimestampToString = (timestamp) =>{
    return timestamp? dayjs.unix(timestamp).format('MMM YYYY'): 'Present';
};