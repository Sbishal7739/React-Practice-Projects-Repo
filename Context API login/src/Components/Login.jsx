import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [userName, setUserName] = useState(''); // Use square brackets here
    const [password, setPassword] = useState(''); // Use square brackets here


    const { setUser } = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='UserName' />
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button onClick={handelSubmit}>Sumbit</button>
        </div>
    )
}

export default Login
