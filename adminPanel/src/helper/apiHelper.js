import axios from 'axios';

export const postApiDataFORM = async (endpoint, data) => {
    try {
        const response = await axios.post(endpoint, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response;


    } catch (err) {
        console.log('Error in Post Data Api', err);
        return err.response.data;
    }
}

export const postApiDataWithToken = async (endpoints, postData) => {
    try {

        const token = localStorage.getItem('token');

        const response = await axios({
            method: "POST",
            url: endpoints,
            data: postData,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        console.log('response in ::', response);
        return response

    } catch (err) {
        console.log('Error in api::', err);
        return err.response
    }
}

export const dashboardData = async (endpoint) => {
    try {

        const token = localStorage.getItem('token');

        const response = await axios.get(endpoint, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })

        return response

    } catch (err) {
        console.log("error in dashboard api", err);
    }
}

export const patient_list = async(endpoint) => {
    try{

        const token = localStorage.getItem('token');

        const response = await axios.get(endpoint, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })

        return response

    }catch(err){
        console.log('error in fetching petient details', err);
    }
}