import React,{useState} from 'react'
import "./css/login.css"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { loginuser } from './features/userSlice';

function Login() {

const [signup,setSignUp]=useState(false);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const dispatch=useDispatch();

const register=(e)=>{
        e.preventDefault();

        if(!name){
            return alert(" ❗Name is required ❗")
        }
        if(!email){
            return alert(" ❗Email is required ❗")
        }
        if(!password){
            return alert("❗Password is required ❗")
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name
            }).then(()=>{
                    dispatch(loginuser({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name
                    }))
            })
        }).catch(error=>alert(error));

        setName("");
        setEmail("");
        setPassword("");

}

    const signIn=(e)=>{
        e.preventDefault();
        if(!email){
            return alert(" ❗Email is required ❗")
        }
        if(!password){
            return alert("❗Password is required ❗")
        }

        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(loginuser({
                email:user.email,
                uid:user.uid,
                displayName:user.displayName
            }))
        }).catch(error=>alert(error))
    }

  return (
    <>
    
    <div className='loginScreen'>
    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png "/>

    {
        signup===true ? (
            <form onSubmit={register}>
            <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter your Email here"value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password " value={password} onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign up"/>

            <h4>Already a member? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
        </form>
            ) 
        : 
            (
            <form onSubmit={signIn}>
            <input type="email" placeholder="Enter your Email here" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign In"/>

            <h4>Not a member? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
        </form>
        )
    }
        
    </div>
    </>
  )
}

export default Login