import Lottie from 'lottie-react'
import React, { use } from 'react'
import d from '../../assets/Animation - 1750412027414.json'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { AuthContext } from '../../Context/Authcontext/AuthContext'

const Register = () => {
    const {  loading,createUser}=use(AuthContext)

    const handlRegister=(e)=>{
         e.preventDefault();
         const form=e.target;
         const email=form.email.value;
         const password=form.password.value;
       

        //  creatUser
        createUser(email,password)
        .then(r=>{
             console.log(r.user)
        })
        .catch(e=>{
             console.log(e)
        })

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Lottie style={{width:'200px'}} animationData={d} loop={true} />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h1 className="text-5xl font-bold">Register Now!</h1>
     
        <form onSubmit={handlRegister}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register
