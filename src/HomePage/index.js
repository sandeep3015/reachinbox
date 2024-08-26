import {useState} from 'react'
import SignupPage from '../SignupPage'
import Header from '../Header'
import LoginPage from '../LoginPage'
import './index.css'

const HomePage = () => {

    const [onClickCreateAcct, setCreateButton] = useState(false)
    const [onClickSignIn, setSigninButton] = useState(false)

    const onClickOpenSignupPage = () => {
        setCreateButton(true)
    }

    const onClickOpenSigninPage = () => {
        setSigninButton(true)
    }

    return (
        <div className='main-container'>
            {onClickSignIn ? (
                <LoginPage />
            ):(
                <div className='acct-container'>
                {onClickCreateAcct ? (
                    <>
                    <SignupPage />
                    </>
                ): (
                    <div>
                    <Header />
                    <div className='main-bottom-container'>
                    <div className='create-acct-container'>
                        <h1 className='create-text'>Create a new account</h1>
                        <button className='signup-container'>
                            <img
                                src='https://tse2.mm.bing.net/th?id=OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa&pid=Api&P=0&h=180'
                                alt='google-icon'
                                className='google-icon' 
                            />
                            <p className='signup-text'>Signup with Google</p>
                        </button>
                        <button className='create-button' type='button' onClick={onClickOpenSignupPage}>Create an Account</button>
                        <p className='signin-text'>Already have an account? <button className='anchor-link' onClick={onClickOpenSigninPage}>SignIn</button></p>
                    </div>
                    </div>
                    </div>
                )}
            </div>
            )}
        </div>
    )
}

export default HomePage