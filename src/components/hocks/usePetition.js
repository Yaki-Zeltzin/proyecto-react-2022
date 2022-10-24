import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) =>{

    const API_URL = 'https://api.coincap.io/v2/';

    const [data, setData] = useState();
    
    useEffect(()=>{
        axios.get(`${API_URL}${endpoint}`)
        .then((data)=>{
            setData(data.data.data);
        })
        .catch((e)=>{console.error(e);})
    },[]);

    return data;
}

export default usePetition;