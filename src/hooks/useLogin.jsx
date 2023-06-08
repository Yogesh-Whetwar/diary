import { useState } from 'react';
import { useAuthContext } from './useAuthContext.jsx';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        console.log(email);
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:7000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const json = await response.json();
            console.log(json)

            if (!response.ok) {
                setLoading(false);
                setError(json.error);
            }

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({ type: 'LOGIN', payload: json });
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    return { login, error, loading };
};