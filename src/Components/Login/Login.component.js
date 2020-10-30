import React, {useState} from 'react'
import { connect } from "react-redux";
import './Login.styles.css'

function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const login = (e) => {
        setErrors([]);
        e.preventDefault();
        if(userName.length > 0 && password.length > 0){
            if(userName === props.loginData.username && password === props.loginData.password){
                props.history.push("/dashboard")
                setErrors([]);
            } else {
                setErrors([ 'Incorrect Username or Password']);
            }
        } else {
               setErrors(['Enter Username and Password']);
        }        
    }
    return (<>
        <div className="login">
            <form className="back-ground" onSubmit={login}>
            <h1 className="heading-3T"> Login </h1>
                <input className="txt" placeholder="Username" type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} name="username" />
                <input className="txt" placeholder="Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" />
                <button className="send-style" type="submit"> Login </button>
                <div className="error-msg">
            <span>
                {
                    errors.map(
                        (error,index)=>
                          <h3 key={index}>{error}</h3>
                    )
                }
            </span>
        </div>
            </form>
        </div>
        
    </>)
}

const mapStateToProps = (state) => {
    return ({
        loginData: state.loginData,
    })
}

export default connect(mapStateToProps)(Login)
