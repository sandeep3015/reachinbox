import { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'

const usersList = [{
    name: 'Sandeep',
    email: 'sandeepravada111@gmail.com',
    mobile: '9052501827'
}]

class SignupPage extends Component {

    state = {
        users: usersList,
        name: '',
        email: '',
        mobile: '',
        isCreateButtonClicked: false,
    }


    onChangeName = event => {
        this.setState({name: event.target.value})
    }

    onChangeEmail = event => {
        this.setState({email: event.target.value})
    }

    onChangeMobile = event => {
        this.setState({mobile: event.target.value})
    }

    onClickCreateButton = () => {
        const {name, email, mobile, users} = this.state
        this.setState({isCreateButtonClicked: true})
        const newUser = {
            name,
            email,
            mobile,
        }
        this.setState([...users, newUser])
    }

    render() {

        const {name, email, mobile, isCreateButtonClicked, users} = this.state
        return (
            <div >
                {isCreateButtonClicked ? (
                    users.map(eachUser => (
                        <SideBar userDetails={eachUser} key={eachUser.name}/>
                    )) 
                ) : (
                    <div className='create-container'>
                    <form className='form-background' onSubmit={this.onClickCreateButton}>
                        <div className='inputs-container'>
                            <label className='input-text' for='name'>Name</label>
                            <div className='name-input'>
                                <input placeholder='First Name' className='name-field' id='name' onChange={this.onChangeName} value={name}/>
                                <input type='text' placeholder='Last Name' className='name-field' id='name'/>
                            </div>
                        </div>
                        <div className='inputs-container'>
                            <label className='input-text' for='email'>Choose your username</label>
                            <input type='email' placeholder='@gmail.com' className='input-value' id='email' onChange={this.onChangeEmail} value={email}/>
                        </div>
                        <div className='inputs-container'>
                            <label className='input-text' for='password'>Create a password</label>
                            <input type='password' className='input-value' placeholder='Create a password' id='password' />
                        </div>
                        <div className='inputs-container'>
                            <label className='input-text' for='confirmpassword'>Confirm your password</label>
                            <input type='password' className='input-value' placeholder='Confirm your passowrd' id='confirmpassword' />
                        </div>
                        <div className='inputs-container'>
                            <label className='input-text' for='gender'>Gender</label>
                            <select className='select-input-value' id='gender'>
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Transgender</option>
                            </select>
                        </div>
                        <div className='inputs-container'>
                            <label className='input-text' for='mobile'>Mobile</label>
                            <input type='number' className='input-value' placeholder='Mobile Number' id='mobile' onChange={this.onChangeMobile} value={mobile}/>
                        </div>
    
                        <div className='booking-buttons'>
                            <button className='booking-button' type='submit' >Create Account</button>
                            <button className='booking-button' type='button'>Back</button>
                        </div>
                </form>
                </div>
                )}
                </div>
        )
    }
    
}

export default SignupPage