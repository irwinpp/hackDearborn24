'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Log the attempt (you can remove this in production)
        console.log('Login attempt with:', credentials);

        // Redirect to map/page regardless of credentials
        router.push('/');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    } as React.CSSProperties,
    title: {
        marginBottom: '20px',
        fontSize: '2rem', // Increased font size
        fontWeight: 'bold', // Made the font bold
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    } as React.CSSProperties,
    input: {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px',
        color: 'black',
    },
    button: {
        margin: '20px 0',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Login;
