import React, { ChangeEvent, SetStateAction, useReducer, useRef, useState } from 'react'
import './index.css'
import { Field, Form, Formik, FormikProps, withFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { BLOGFORM } from '../../utils/interfaces/blog'
import BlogFormComp from './BlogFormComp'

interface BlogProps extends BLOGFORM {
  create? : boolean
  categoryData? : string[]
}

const BlogForm = withFormik<BlogProps ,BLOGFORM >({
  mapPropsToValues : props => {
    return {
      title : props.title || '',
      overview :props.overview || '',
      url :props.url || '',
      size :props.size || '',
       releasedDate :props.releasedDate || '',
       categories : props.categoryData || []
    }
  },
  // validationSchema :  Yup.object().shape({
  //   title : Yup.string()
  //   .required('Title field must not be empty!'),
  //   overview : Yup.string()
  //   .required('Title field must not be empty!'),
  //   url : Yup.string()
  //   .required('Url field must not be empty!'),
  //   size : Yup.string()
  //   .required('Size field must not be empty!'),
  //   releasedDate : Yup.string()
  //   .required('Release date field must not be empty!'),
  // }),
  handleSubmit : (values) => {
    console.log("HIIII")
    console.log(values)
  }
})(BlogFormComp)

export default BlogForm