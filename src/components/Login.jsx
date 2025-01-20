import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className='w-full p-5'>
            <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 outline-none w-full bg-transparent py-1.5 mb-3"
            />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 outline-none w-full bg-transparent py-1.5 mb-3" />
            <button onClick={handleSubmit} className='border-2 border-white rounded-md bg-blue-600 text-white py-2 px-5'>Submit</button>
        </div>
    )
}

export default Login