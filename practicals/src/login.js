import React, { useState } from "react";

function Login(){

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [message,setMessage]=useState();

    const submit=(e)=>{
        e.preventDefault();
        if (username==="admin" && password==="admin"){
            setMessage("authorized user")
        }
        else{
            setMessage("unauthorized user")
        }
        setUsername("");
        setPassword("");
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <br/><input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/><button type="submit" onClick={submit}>
                    Submit
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default Login