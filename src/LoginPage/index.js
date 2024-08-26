import { useState } from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import HomePage from '../HomePage'
import './index.css'

const LoginPage = () => {
    const [onSignin, setSignin] = useState(false)
    const [goBack, setGoBack] = useState(false)
    const [name, setEmail] = useState('')

    const onClickSigninButton = () => {
        setSignin(true)
        setGoBack(true)
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }
    return (
        <>
        {goBack ? (
            <HomePage />
        ) : (
            <>
            {onSignin ? (
                <SideBar useDetails={name}/>
            ) : (
                <>
                <Header/>
                <form className='form-background' onSubmit={onClickSigninButton}>
                    <div className='inputs-container'>
                        <label className='input-text'>Email</label>
                        <input type='email' placeholder='Email' className='input-value' onChange={onChangeEmail} value={name}/>
                    </div>
                    
                    <div className='inputs-container'>
                        <label className='input-text'>Password</label>
                        <input type='password' placeholder='Password' className='input-value'/>
                    </div>
                    <div>
                        <button className='signin-button' type='submit'>SignIn</button>
                        <button className='signin-button' type='submit'>Back</button>
                    </div>
                    <div>
                        <h1 className='input-text'>Forget Password? <button className='click-here'>Click Here</button></h1>
                    </div>
                </form>
                </>
            )}
            </>
        )}
        </>
    )
}

export default LoginPage