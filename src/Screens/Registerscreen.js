import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';

const Registerscreen = () => {

    const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const[error, seterror]=useState("");
  const[success, setsuccess] = useState("");

  async function register(){
     if(password == cpassword)
     {
        const user = {
            name,
            email,
            password,
            cpassword
        }
        try {
            const result = await (await axios.post('/api/users/register',user)).data
            setsuccess(result.data.message);
        } catch (error) {
            seterror(error.response.data.message);     
        }
     }
     else {

     }
  }

    return (
        
        <div className='login_container'>
            <div className='login_form_container'>
            <div className='right'>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
						<button type="button" className='white_btn'>
							Sign in
						</button>
					</Link>
                </div>
                <div className="left">
                    <form action="" className='form_container'>
                    <h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
                            value={name} 
                            onChange={(e)=>{setname(e.target.value)}}
							required
							className='input'
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
                            value={email} 
                            onChange={(e)=>{setemail(e.target.value)}}
							required
							className='input'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
                            value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}
							className='input'
						/>
                        <input
							type="password"
							placeholder="Confirm Password"
							name="confirmpassword"
                            value={cpassword}
                            required
                            onChange={(e)=>{setcpassword(e.target.value)}}
							className='input'
						/>
                        
                        {error && <div className='error_msg'>{error}</div> }   
                        <button className='green_btn' onClick={register}>
							Sing In
						</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default Registerscreen;
