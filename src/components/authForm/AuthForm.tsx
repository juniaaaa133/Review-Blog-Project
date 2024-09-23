import { Button, Form, FormProps, Input } from 'antd';
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

const handleSubmit: FormProps<Value>['onFinish'] = (values) => {
  console.log('Success:', values);
};

  return (
    <>
    <div className="absolute z-[9] top-0 w-full h-[100vh] bg-main">
    <h2 className="sys-f text-[30px] fontcl2 text-center font-[600]">Mobocat</h2>
    <div className="flex flex-col sm:w-[80%] w-[350px] mt-[60px] m-auto gap-[25px] justify-center h-fit ">
    <p className="fontcl main-f text-[22px] w-[100%]">{login ? 'Sign in.' : 'Create new account.' }</p>
   <Form 
   layout='vertical'
    className='flex flex-col w-full gap-[10px]'
    name="basic"
    onFinish={handleSubmit}
    autoComplete="off"
  >
 {
  !login &&
  <Form.Item<Value>
  label="Username"
  name="username"
  rules={[{ required: true, message: 'Username must not be empty.' }]}
>
  <Input className={'inp main-f text-[14px]'} placeholder={'Username'} />
</Form.Item>
 }

    <Form.Item<Value>
      label="Email address"
      name="email"
      rules={[{ required: true, message: 'Email address must not be empty.' }]}
    >
      <Input className={'inp main-f text-[14px]'} placeholder={'example@gmail.com'} />
      </Form.Item>

    <Form.Item<Value>
      label="Password"
      name="password"
      rules={[
        {
         required: true,
          message: 'Password must not be empty.' 
        },
        {
          min : 7,
           message: 'Password must be at least 7 chars.' 
         },
      ]}
    >
      <Input.Password className={'inp main-f text-[14px]'}/>
    </Form.Item>

    <Link to='/' className='text-[15px] fontcl main-f text-left'>Forgot password?</Link>
    
      <button className="btn1 trans main-f">{login ? "Loign" : "Sign up"}</button>
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
 
    </>
  )
}

export default AuthForm