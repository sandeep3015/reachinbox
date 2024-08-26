import { useState } from "react";
import { IoNavigate } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import './index.css'

const userDetails = [
    {
    id: 1,
    email: 'sandeep@gmail.com',
    subject: 'I have tried a lot...'
    },
    {
    id: 2,
    email: 'madhu@gmail.com',
    subject: 'Payment not going through...'
    },
    {
    id: 3,
    email: 'ayaansh@gmail.com',
    subject: 'Could you tell me more...'
    },
    {
    id: 4,
    email: 'takshiv@gmail.com',
    subject: 'Hi, I am interested...'
    },
    {
    id: 5,
    email: 'sai@gmail.com',
    subject: 'I will get back to you...',
    },
]

const NewEmail = () => {

    const [userInfo, setUsers] = useState(false)
    const [userId, setId] = useState(-1)

    

    const onClickDisplay = () => {
        setUsers(true)
        if(userDetails.length === userId) {
            setId(-1)
        }
        else {
            setId(userId + 1)
        }
    }

    return (
        <>
        <ul className="left-container">
            <div className='content-display'>
                {userDetails.map(eachUser => (
                    <li className="list-item" key={eachUser.id}>
                        <div className="email-sub">
                            <FaDotCircle className="email-sub-icon"/>
                            <p className="email-sub-text">{eachUser.email}</p>
                        </div>
                        <div className="email-sub">
                            <FaCommentDots className="email-sub-icon"/>
                            <p className="email-sub-text">{eachUser.subject}</p>
                        </div>
                        <div className="buttons-cont">
                            <button className="buttons-icon" onClick={onClickDisplay}><IoNavigate/></button>
                            <button className="buttons-icon"><FaBookmark/></button>
                        </div>
                    </li>
                ))}
                
            </div>
        </ul>
        <div className="right-container">
            {userInfo ? (
                <>
                <h1 className="email-sub-text">{`Email: ${userDetails[userId].email}`}</h1>
                <p className="email-sub-text">{`Subject: ${userDetails[userId].subject}`}</p>
                </>
            ):(
                null
            )}
            
        </div>
        </>
    )
}

export default NewEmail