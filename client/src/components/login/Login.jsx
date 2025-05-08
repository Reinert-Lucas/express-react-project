import '../../css/login.css'
import { useState, useEffect } from 'react';

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user, pass}),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='loginForm'>
                <h1 className='loginTitle'>Log Into ur Account</h1>
                <input type="text" value={user} placeholder='User' className='loginInput' onChange={e => setUser(e.target.value)} />
                <input type="password" value={pass} placeholder='Password' className='loginInput' onChange={e => setPass(e.target.value)} />
                <input type="submit" value="LogIn" className='sbmtBtn' />
            </form>
        </>
    )
}

export default Login