import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registerscreen = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
  
    //API Call
  async function register(){
     if(password != cpassword)
     {
        toast.error("Password Not Matched!");
     }else{
        const user = {
          name,
          email,
          password
      }
     try {

        const result = await (await axios.post('/api/users/register',user)).data
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
        toast.promise(
                resolveAfter3Sec,
                    {  
                success: 'Account Created Successfully👌'
                }
        )
        setemail('')
        setname('')
        setcpassword('')
        setpassword('')
        console.log(result)
     } catch (error) {
         if(error.response.status == 400){
            toast.info("Password must be 6 Characters Long and must contain a Number");
         }else if(error.response.status == 500 ){
             toast.error("Internal Server Error!")
         }
         toast.error("Name is required!")
         toast.error("Email is required!")
         toast.error("Password is required!")
        console.log(error)
     }
     }
  }
    return (
        <>
        <div className='login_container container'>
            <ToastContainer
                theme="dark"
                style={{ width: "600px", height: "100px"}}
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='login_form_container'>
            <div className='container right'>
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
							className='input'
                            value={name} 
                            onChange={(e)=>{setname(e.target.value)}}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							className='input'
                            value={email} 
                            onChange={(e)=>{setemail(e.target.value)}}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className='input'
                            value={password}
                            required
                            onChange={(e)=>{setpassword(e.target.value)}}
						/>
                        <input
							type="password"
							placeholder="Confirm Password"
							name="cpassword"
							required
							className='input'
                            value={cpassword}
                            onChange={(e)=>{setcpassword(e.target.value)}}
						/>
						<button  className='green_btn' onClick={register}>
							Register
						</button>
					</div>
                </div>
                
            </div> 
        </div>
        </>
    );
}

export default Registerscreen;
