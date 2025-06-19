import React, { useState } from 'react';

function Login() {

const [formData,setFormData]=useState({
    username:"",
    password:""
})


const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setFormData({...formData,[name]:value});
};

const [err,setErr]=useState({});
cons [msg,setMsg]=useState({});



const handleSubmit=(e)=>{
    e.preventDefault();

    if(validate){

    }
}





  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name='username'required onChange={handleChange} value={formData.username}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name='password'required onChange={handleChange} value={formData.value}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
