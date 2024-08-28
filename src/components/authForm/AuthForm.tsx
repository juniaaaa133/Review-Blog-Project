import { Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'

const AuthForm = ({
  login
} : 
{
  login: boolean
}) => {

interface Value {
  username : string,
  email : string,
  password : string,
}

const handleSubmit = (values : Value) => {
  console.log(values)
}

  return (
    <>
    <Formik 
    initialValues={{
      username : '',
      email : '',
      password : '',
    }}
    onSubmit={handleSubmit}
    >

<div className="absolute z-[9] top-0 w-full h-[100vh] bg-main">
<div className="flex flex-col sm:w-[80%] w-[350px] mt-[60px] m-auto gap-[25px] justify-center h-fit ">
<h2 className="sys-f text-[30px] fontcl2 text-center font-[600]">Mobocat</h2>

    <Form className='flex flex-col w-full gap-[10px]'>
  <p className="fontcl main-f text-[22px] w-[100%]">{login ? 'Sign in.' : 'Create new account.' }</p>
  {
    !login && 
    <div className="flex flex-col gap-[5px] w-full">
<label className='text-[15px] fontcl main-f' htmlFor="username">Username</label>
<Field className="w-full inp main-f fontcl text-[15px] h-[41px]" type='text' id='username' placeholder="Username" name="username"/>
  </div>
  }
  <div className="flex flex-col gap-[5px] w-full">
<label className='text-[15px] fontcl main-f' htmlFor="email">Email address</label>
<Field className="w-full inp main-f fontcl text-[15px] h-[41px]" type='email' id='email' placeholder="Example@gmail.com" name="email"/>
  </div>
  <div className="flex flex-col gap-[5px] w-full">
<label className='text-[15px] fontcl main-f' htmlFor="password">Password</label>
<Field className="w-full inp main-f fontcl text-[15px] h-[41px]"  type='password' id='password' placeholder="Password" name="password"/>
  </div>
  <Link to='/' className='text-[15px] fontcl main-f text-left'>Forgot password?</Link>
  <button className="btn1 main-f text-[15px] trans">{login ? "Login account" : "Create account" }</button>
</Form>
{
  login ?
  <div className="flex items-center main-f text-[15px] gap-[5px]">
    <p className="fontcl">Don't have an account?</p>
    <Link to='/sign-up' className='fontcl2'>Create account.</Link>
  </div>
  :
  <div className="flex items-center main-f text-[15px] gap-[5px]">
  <p className="fontcl">Already have an account?</p>
  <Link to='/login' className='fontcl2'>Login.</Link>
</div>
}
</div>
</div>
    </Formik>
    </>
  )
}

export default AuthForm