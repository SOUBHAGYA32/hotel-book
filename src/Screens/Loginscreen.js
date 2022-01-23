import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Loginscreen() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const[error, seterror]=useState("")
    async    function login(){
        const user = {
            email,
            password
        }
        try {
            const result = await (await axios.post('/api/users/login',user)).data
            localStorage.setItem('currentUser',JSON.stringify(result));

        } catch (error) {
            seterror(error.response.data.message)
            console.log(error);
        }
       
    }
    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className="left">
                    <form action="" className='form_container'>
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
                       {error &&  <div className='error_msg'>{error}</div>}
                        <button onClick={login} className='green_btn'>
							Sing In
						</button>
                    </form>
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
