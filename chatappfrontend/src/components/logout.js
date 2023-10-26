import React, { useEffect } from "react";
import axios from "axios";
export const Logout=()=>{
    useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.post('http://localhost:8000/logout/',{
                    refresh_token:localStorage.getItem('refresh_token')
                },{
                    headers:{
                        'Content_Type':'application/json',
                    }, withCredentials: true
                });
                console.log('Data: ', data);
            } catch(error){
                console.log('Logout error: ',error);
            }
            
        })();
    },[]);
    return(
        <div></div>
    );
}