import React, { ChangeEvent, SetStateAction, useReducer, useRef, useState } from 'react'
import './index.css'
import { Field, Form, Formik, FormikProps, withFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { BLOG, BLOGFORM } from '../../utils/interfaces/blog'
import BlogFormComp from './BlogFormComp'
import { categories } from '../../utils/data'

interface BlogProps extends BLOG {
  create? : boolean
  categoryData? : string[]
}

const BlogForm = withFormik<BlogProps ,BLOG >({
  mapPropsToValues : props => {
    console.log(props.create , props.categoryData , "PROPS")
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
  handleSubmit : (values : BLOG) => {
    let formData = new FormData;
     
    if(
      values.title &&
      values.overview &&
      values.size &&
      values.rating &&
      values.releasedDate &&
      values.categories &&
      values.url &&
      values.isOnline &&
      values.backdrop &&
      values.icon
    ){
 formData.append("title",values.title)
 formData.append("overview",values.overview)
 formData.append("size",values.size)
 formData.append("rating",values.rating)
 formData.append("releasedDate",values.releasedDate)
 formData.append("url",values.url)
 formData.append("categories",JSON.stringify(values.categories))
 formData.append("isOnline",JSON.stringify(values.isOnline))
 formData.append("backdrop",values.backdrop)
 formData.append("icon",values.icon)
    }

  }
})(BlogFormComp)

export default BlogForm