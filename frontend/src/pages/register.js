import React, { useState } from 'react';
import "./register.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");




    return (

        <div id="simpleModal" className="Modal">
            {/* <img className="logo" src={logo} /> */}
            <div id="earthdiv" >
                {/* <img src={earth} id="earth"></img> */}
            </div>

            <div className='modal-content' id="modalContent">
                <div className='modal-header' id="ModalHeader">
                    <div id="register_head">WELCOME!</div>
                </div>
                <div className="modal-body" id="ModalBody">
                    <form id="LRform" action="">
                        <div className="textbox" >
                            <FaUserAlt />
                            <input placeholder="Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} required></input>
                        </div>
                        <div className="textbox" >
                            <MdAlternateEmail />
                            <input placeholder="E-mail" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                        </div>
                        <button id="submitbtn" >REGISTER</button>
                    </form>

                </div>
            </div>
        </div>
    )
}