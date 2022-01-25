import Error from '../Components/Error';
import Success from '../Components/Success';
import Loading from '../Components/Loading';

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Loginscreen() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const[error, seterror]=useState(false)
    const[success, setsuccess]=useState(false)


    async function login(){
        const user={
          email,
          password
      }
        try {

          const result = await (await axios.post('/api/users/login', user)).data
            console.log(result)
        } catch (error) {
          console.log(error)
        }
        console.log(user)
      }
   
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
                            value={email} 
                            onChange={(e)=>{setemail(e.target.value)}}
							className='input'
						/>
                        <input
							type="password"
							placeholder="Password"
							name="password"
                            value={password}
                            required
                            onChange={(e)=>{setpassword(e.target.value)}}
							className='input'
						/>
                        <button type='submit' className='green_btn' onClick={login}>
							Login
						</button>
                    </div>
                </div>
                <div className='right'>
                    <h1>New Here ?</h1>
                    <Link to="/register">
						<button  className='white_btn'>
						Register
						</button>
					</Link>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen
