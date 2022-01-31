import Loading from "../Components/Loading";
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Users() {

  const[users , setusers] = useState()
  const[loading , setloading] = useState(true)

  useEffect(async() => {
    try {
      const data = await (await axios.get('/api/users/getallusers')).data
      localStorage.setItem('users',JSON.stringify(data));
      setusers(data)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }, []);
  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-10">
          <h1>Users</h1>
              <table className="table table-bordered table-dark">
              <thead className='box-s'>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>isAdmin</th>
             </tr>
           </thead>
           <tbody>
          {users && (users.map(user=>{
          return <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                </tr>
            }))}
          </tbody>
              </table>
          </div>
        </div>
    </div>
  );
}

export default Users;
