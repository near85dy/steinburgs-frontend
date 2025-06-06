import { useEffect, useState } from "react";
import releaseLogin from "../services/auth.service"

function LoginPage()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        //if(token)         window.location.assign('../tasks');
    })
    
    const signupButtonClick = () =>
        {
             
        }

    const loginButtonClick = async () =>
    {
        if(username == '' || password == '') return setErrorMessage('Username or password field is empty');
        await releaseLogin({username, password});
        window.location.assign('../tasks');
    }

    return (<>
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
            <h1 className="font-serif text-2xl">Welcome back!</h1>
            <input className="block w-full mt-1 px-4 py-2 border" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
            <input className="block w-full mt-1 px-4 py-2 border" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <div>
            {errorMessage != '' &&
                <p>{errorMessage}</p>
            }
        </div>
            <button className="bg-blue-500 text-white w-full mt-1 p-2" onClick={loginButtonClick}>Login</button>
        </div>
    </div>
    </>)
}

export default LoginPage; 