import React from 'react'
import AuthForm from '../../components/authForm/AuthForm'

const AuthFormPage = ({
    login
} : {
    login : boolean
}) => {
  return <AuthForm login={login} />
}

export default AuthFormPage