import Error from '../Components/Error';
import Success from '../Components/Success';
import Loading from '../Components/Loading';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Loginscreen() {
   
    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className="left">
                    <div className='form_container' >
                    <h1>Login to Your Account</h1>
                    <input
							type="email"
							placeholder="Email"
							name="email"
							required
							className='input'
						/>
                        <input
							type="password"
							placeholder="Password"
							name="password"
                            required
							className='input'
						/>
                        <button type='submit' className='green_btn'>
							Sing In
						</button>
                    </div>
                </div>
                <div className='right'>
                    <h1>New Here ?</h1>
                    <Link to="/register">
						<button  className='white_btn'>
							Sign Up
						</button>
					</Link>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen
