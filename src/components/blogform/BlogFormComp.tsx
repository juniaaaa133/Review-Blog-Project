import { Field, FormikProps, FormikValues } from 'formik'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import { SetFieldValue } from '../../utils/interfaces/formik';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiImageAddLine } from 'react-icons/ri';
import { BLOGFORM } from '../../utils/interfaces/blog';

interface BlogProps extends BLOGFORM {
  create? : boolean
}

const BlogFormComp = (props: BlogProps & FormikProps<BLOGFORM>) => {

      const {
        create,
        errors,
        setFieldValue
      } = props;

      let [selectedImage,setSelectedImage] = useState<string | null>('');
      let imageFileInput = useRef<HTMLInputElement | null>(null);

      let showImage = (e : ChangeEvent<HTMLInputElement>,setFieldValue : SetFieldValue) => {
    if(e.currentTarget.files){
      let img = e.currentTarget.files[0]
      let imageUrl = URL.createObjectURL(img)
      setSelectedImage(imageUrl)
      setFieldValue('coverImage',img)
    }
        }
        
      let removeShownImage = (setFieldValue : SetFieldValue) => {
            setSelectedImage(null);
            setFieldValue('coverImage',null);
           if( imageFileInput.current)
            imageFileInput.current.value == null
        }
    

    return (
      
<div className="absolute z-[9] top-0 w-full h-[100vh] bg-main">
<div className="flex flex-col sm:w-[80%] w-[400px] mt-[60px] m-auto gap-[30px] justify-center h-fit ">
<Form className='flex flex-col w-full gap-[10px]'>
        <p className="fontcl main-f text-[22px] w-[100%]">{create ? 'Post new blog' : 'Update blog' }</p>
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="title">Post Title</label>
      <Field className="w-full inp main-f fontcl text-[15px] h-[41px]" type='title' id='title' placeholder="Title" name="title"/>
        </div>
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="url">App link url</label>
      <Field className="w-full inp main-f fontcl text-[15px] h-[41px]"  type='text' id='url' placeholder="www.example-url.com" name="url"/>
        </div>
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="size">App size</label>
      <Field className="w-full inp main-f fontcl text-[15px] h-[41px]"  type='text' id='size' placeholder="Size in mb or gb" name="size"/>
        </div>
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="releasedDate">App's released date</label>
      <Field className="w-full inp main-f fontcl text-[15px] h-[41px]"  type='text' id='releasedDate' placeholder="Released date" name="releasedDate"/>
        </div>
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="status">Set app's status</label>
      <Field
        className=" inp main-f fontcl text-[15px] bcu h-[41px]"
         name="status" as="select">
         <option className={'bcu'} value="online">Online</option>
         <option className={'bcu'} value="offline">Offline</option>
         <option className={'bcu'} value="any">Hybird</option>
       </Field>
        </div>
        <div className="flex flex-col gap-[5px] w-full main-f">
        <input onChange={(e)=>showImage(e,setFieldValue)} type="file" ref={imageFileInput} hidden id='image' name='image' className='fontcl text-[16px] main-f w-full'/ >
                      {
                          selectedImage ?
                          <div onClick={()=>imageFileInput.current?.click()} className="file-img-ctn bcu">
                              <div className='text-[36px] z-[2] text-white absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'>
                                <TbPhotoEdit />
                              </div>
                              <img src={selectedImage} alt="" className='file-img pic'/>
                          </div>
                          :
                          <div type='button' onClick={()=>imageFileInput.current?.click()} className="relative bcu file-main">
                      <div className='text-[36px] fontcl3 absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'>
                        <RiImageAddLine />
                      </div>
                      </div>
                      }
             </div>
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="overview">Overview</label>
      <Field as="textarea" className="w-full inp main-f fontcl text-[15px] h-[201px]"  type='text' id='overview' placeholder="Overview" name="overview"/>
        </div>
        <button className="btn1 main-f text-[15px] trans">{create ? "Post Blog" : "Update Blog" }</button>
      </Form>
</div>
</div>
      
    )
}

export default BlogFormComp