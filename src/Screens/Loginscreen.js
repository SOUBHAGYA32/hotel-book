import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Loginscreen() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    useEffect(() => {

        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
      
    }, [])
    async function login(){
        const user={
          email,
          password
      }
        try {
          const result = await (await axios.post('/api/users/login', user)).data
          localStorage.setItem('currentUser',JSON.stringify(result))
          window.location.href='/'
        } catch (error) {
            if(error.response.status == 400){
                toast.error("Email is Required!");
                toast.error("Password is Required!")
             }else if(error.response.status == 401 ){
                 toast.error("Password is not Correct!")
             }else if(error.response.status == 404){
                 toast.error("User Not Found! Please Register")
             }
            console.log(error)
        }

      }
    return (
        <div className='container login_container'>
         <ToastContainer
                theme="dark"
                style={{ width: "600px", height: "100px"}}
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
            />
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
