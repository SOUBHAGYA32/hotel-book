import Error from '../Components/Error';
import Success from '../Components/Success';
import Loading from '../Components/Loading';

import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Registerscreen = () => {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const[loading, setloading]=useState(false)
    const[error, seterror]=useState("")
    const[success, setsuccess]=useState("") 

    async function registerUser() {
        if(password!=cpassword)
      {
          alert("passwords not matched")
      }
   
      else{
        const user={
              name,
              email,
              password
          }
          try {
            setloading(true)
            const result = await (await axios.post('/api/users/register',user)).data
            setloading(false)
            setsuccess(result.response.message)
            setemail('')
            setname('')
            setcpassword('')
            setpassword('')
          } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				seterror(error.message);
			}
            console.log(error);
          }
      
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
                   <div className='form_container'>
                   <h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							required
                            value={name} onChange={(e)=>{setname(e.target.value)}}
							className='input'
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
                            value={email} onChange={(e)=>{setemail(e.target.value)}}
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
                        <input
							type="password"
							placeholder="Confirm Password"
							name="confirmpassword"
                            value={cpassword}
                            required
                            onChange={(e)=>{setcpassword(e.target.value)}}
							className='input'
						/>
                        {success && (<Success success='User Registered Successfully'/>)}
                        {error && (<Error error={error} />)}
                        <button className='green_btn' onClick={registerUser}>
							Register
						</button>
                   </div>
                </div>
                
            </div>
        </div>
    );
}

export default Registerscreen;
