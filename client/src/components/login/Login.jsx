import { useNavigate } from 'react-router-dom';
import '../../css/login.css'
import { useState, useEffect } from 'react';

function Login() {
    // Hooks
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    
    // handleSubmit event
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fetch Express API
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, pass }),
            });
            const data = await response.json();
            
            // Redirect after login
            if (data.success)
                navigate(data.redirectTo);
            else
                alert(data.message);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <section className='login'>
                <form onSubmit={handleSubmit} className='loginForm'>
                    <h1 className='loginTitle'>Log Into ur Account</h1>
                    <input type="text" value={user} placeholder='User' className='loginInput' onChange={e => setUser(e.target.value)} />
                    <input type="password" value={pass} placeholder='Password' className='loginInput' onChange={e => setPass(e.target.value)} />
                    <input type="submit" value="LogIn" className='sbmtBtn' />
                </form>
            </section>
        </>
    )
}

export default Login