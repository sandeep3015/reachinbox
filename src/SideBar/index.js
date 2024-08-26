import { TbHomeFilled } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoNavigate } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import NewEmail from "../NewEmail";
import './index.css'
import { useState } from "react";

const SideBar = props => {
    const {userDetails} = props
    const {name} = userDetails

    const [onClickCreate, setNewEmail] = useState(false)

    const onClickCreateNew = () => {
        setNewEmail(true)
    }

    return (
        <div className="side-top-container">
            <div className="topbar-container">
                <div className="logo-container">
                    <img
                        src='https://tse1.mm.bing.net/th?id=OIP.9WO6Yn7hungVG9SYMswViAAAAA&pid=Api&P=0&h=180'
                        alt='inbox-icon'
                        className='main-icon' 
                    />
                    <p className="top-text">Onebox</p>
                </div>
                <h1 className="top-text">{`${name}`}'s Workplace</h1>
            </div>
            <div className="bottom-container">
                <div className="sidebar-container">
                    <button className="icon-buttons">
                        <TbHomeFilled className="sidebar-icon" />
                    </button>
                    <button className="icon-buttons">
                    <MdPersonSearch className="sidebar-icon"/>
                    </button>
                    <button className="icon-buttons">
                    <MdEmail className="sidebar-icon"/>
                    </button>
                    <button className="icon-buttons">
                    <IoNavigate className="sidebar-icon"/>
                    </button>
                    <button className="icon-buttons">
                    <FaThList className="sidebar-icon"/>
                    </button>
                    <button className="icon-buttons">
                    <HiOutlineMailOpen className="sidebar-icon"/>
                    </button>
                    <button className="icon-buttons">
                    <SiSimpleanalytics className="sidebar-icon"/>
                    </button>
                </div>
                <div className={onClickCreate === true ? 'display-new-email-container': 'display-container'}>
                    {onClickCreate ? (
                        <NewEmail/>
                    ) : (
                        <div className="intro-container">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/10605/10605389.png"
                                alt='email-image'
                                className="email-icon"
                            />
                            <h1 className="top-text">It's the beginning of the legandary sales pipeline</h1>
                            <p className="para-text">When you have inbound E-mails you'll see them here</p>
                            <button type="button" className="newemail-button" onClick={onClickCreateNew}>Begin</button>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default SideBar