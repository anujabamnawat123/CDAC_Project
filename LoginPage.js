import React, { useState } from 'react';

export default function LoginPage () {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let[change,setchange] = useState('');

  function handleLogin () {
    // Handle login logic here
    let flag = false
        let arr = [{ uname: "xxx", password: "123" },
        { uname: "rrr", password: "13" },
        { uname: "xeex", password: "23" },]

        for(let i of arr){
            console.log(username)
            if(i.uname == username && i.password == password){
            flag=true
            break
        }
    }
        if(flag){
            setchange("welcome")
        }
        else{
            setchange("Not registered user")
        }
  }

  return (
    <div>
      <h1>E-Tender Login</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Login" onClick={handleLogin}/>
        <br></br>
        <p id="h2">{change}</p>
      </form>
    </div>
  );
}


