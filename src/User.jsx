import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const User = () => {
    return (
        <UserContextProvider>
            <div className='flex flex-wrap'>
                <Login />
                <Profile />
            </div>
        </UserContextProvider>
    )
}

export default User