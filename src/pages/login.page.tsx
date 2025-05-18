import { useState } from "react";
import releaseLogin from "../services/auth.service";

function LoginPage()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const loginButtonClick = async () =>
    {
        if(username == '' || password == '') return setErrorMessage('Username or password field is empty');
        await releaseLogin({username, password});
    }

    return (<>
        <div>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
        </div>
        <div>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>
        <div>
            {errorMessage != '' &&
                <p>{errorMessage}</p>
            }
        </div>
        <div>
            <button onClick={loginButtonClick}>Login</button>
        </div>
    </>)
}

export default LoginPage; 