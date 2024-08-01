
// import axios from 'axios'
// //BACKEND ANNU ITHU
// const BASE_URL='http://localhost:4528'

// export const login =async(data)=>{
//     try {
//         const response = await axios.post(`${BASE_URL}/users/log-in`, data)
//     return response.data
//     } catch (error) {
//         throw error
//     }
// }

// export const addProduct =async(data)=>{
//     try {
//         const response = await axios.post(`${BASE_URL}/products`,data)  // {"Content-Type":"multipart/form-data"}, multer undnekil
//     return response.data
//     } catch (error) {
//         throw error
//     }
// }

import axios from 'axios';

const BASE_URL = 'http://localhost:4528';

export const login = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/log-in`, data);
        return response
    } catch (error) {
        throw error;
    }
};

export const addProduct = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/products`, data);
        return response
    } catch (error) {
        throw error;
    }
};
