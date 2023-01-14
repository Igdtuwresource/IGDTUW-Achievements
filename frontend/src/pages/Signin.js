import React, { useState } from 'react';
import "./signin.css";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { border } from '@mui/system';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordType, setPasswordType] = useState("password")

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }

    const [name, setName] = useState("");

    const setItems = (name, email, profilePic) => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

    }

    return (


        <div id="simpleModal" className="Modal" >

            <div className='modal-content' id="modalContent">
                <div className='modal-header' id="ModalHeader">
                    <div id="login_heading">WELCOME BACK !</div>
                </div>

                <div className="modal-body" id="ModalBody">
                    <form id="LRform" action="">
                        <div  >
                        </div>
                        <div className="textbox" >
                            <MdAlternateEmail />
                            <input placeholder="E-mail" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type={passwordType} placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>

                            <div className="input-group-btn">
                                <a onClick={togglePassword} style={{ background: "transparent", border: "none" }}>
                                    {passwordType === "password" ? <AiFillEyeInvisible style={{ marginLeft: "-2vw" }} /> : <AiFillEye style={{ marginLeft: "-2vw" }} />}
                                </a>
                            </div>

                        </div>
                        <button id="submitbtn" >LOGIN</button>
                        <div id="forgot">Don't remember your password? <a href='/' style={{ color: "#9747FF" }}>Forgot Password</a></div>
                    </form>

                </div>
            </div>
        </div>
    )
}