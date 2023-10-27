import React, { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post('http://localhost:8000/logout/', {
                    refresh_token: localStorage.getItem('refresh_token')
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    },
                    withCredentials: true
                });

                if (response && response.status === 205) {
                    // Clear local storage and tokens
                    localStorage.clear();
                } else {
                    console.error('Unexpected response:', response);
                }
            } catch (error) {
                console.log('Logout error:', error);
            }
        })();
    }, []);

    return (
        <div></div>
    );
}
