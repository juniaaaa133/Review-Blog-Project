import { withFormik } from 'formik'
import React from 'react'
import { User } from '../../../utils/interfaces/user'
import UserForm from './UserForm'
import * as Yup from 'yup'
import { useParams } from 'react-router'

interface OtherProps extends User {
  create : boolean
  authAccount : string
}

const UserDetail = withFormik<OtherProps,User>({

  mapPropsToValues : props => {
    return {
      username : !props.create ? "Reinnn" : '',
      email : !props.create ? props.email : '',
      password : !props.create ? props.password : '',
      // role : !props.create ? props.role : 'user',
      role : 'admin',
      isSuspended : !props.create ? props.isSuspended : false,
      pfp : !props.create ? props.pfp : null,
      joinedDate : !props.create ? props.joinedDate :  new Date(),
    }
  },
  validationSchema :  Yup.object().shape({
    username : Yup.string()
    .required('Username field must not be empty!'),
    email : Yup.string()
    .required('Email field must not be empty!')
    .email("Invalid email address."),
    password : Yup.string()
    .required('Password field must not be empty!')
    .min(7,"Password must have at least 7 chars."),
    pfp : Yup.string()
  }),
  handleSubmit : ()=>{
    //
  }
})(UserForm)

export default UserDetail