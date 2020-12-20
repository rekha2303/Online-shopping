import React from 'react'
import './style.css';

export default function signup() {
    return (
        <div className="container-log">
        <form>
            <label name="email">Email</label>
            <input name="email" type="text" placeholder="Enter your Email" />

            <label name="name">Name </label>
            <input name="name" type="text" placeholder="Enter your Name" />

            <label name="password">Password </label>
            <input name="password" type="password" placeholder="Enter your password" />

            <button type="submit">Login</button>            
        </form>
        </div>
    )
}
