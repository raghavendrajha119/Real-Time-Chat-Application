import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken===null) {                   
            window.location.href = '/login';
        } else {
            (async () => {
                try {
                    const response = await axios.get(   
                        'http://localhost:8000/home/',
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${accessToken}`
                            }
                        }
                    );
                    setMessage(response.data.message);
                } catch (error) {
                    console.error('Error:', error);
                }
            })();
        }
    }, []);

    return (
        <div className="form-signin mt-5 text-center">
            <h3>Hi {message}</h3>
        </div>
    );       
}
