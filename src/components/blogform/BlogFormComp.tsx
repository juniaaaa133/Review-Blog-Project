import { Field, FormikProps, FormikValues } from 'formik'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import { SetFieldValue } from '../../utils/interfaces/formik';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiImageAddLine } from 'react-icons/ri';
import { BLOGFORM } from '../../utils/interfaces/blog';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import './index.css'

interface BlogProps extends BLOGFORM {
  create? : boolean
}

const BlogFormComp = (props: BlogProps & FormikProps<BLOGFORM>) => {

      const {
        create,
        errors,
        setFieldValue
      } = props;

      let [selectedBackdropImage,setSelectedBackdropImage] = useState<string | null>(null);
      let [selectedIconImage,setSelectedIconImage] = useState<string | null>(null);
      let backdropImage = useRef<HTMLInputElement | null>(null);
      let iconImage = useRef<HTMLInputElement | null>(null);

      let showImage = (type : string,e : ChangeEvent<HTMLInputElement>,setFieldValue : SetFieldValue) => {
    if(e.currentTarget.files){
    if(!selectedBackdropImage && type === 'backdrop'){
      let backdropImg = e.currentTarget.files[0]
      let imageUrl = URL.createObjectURL(backdropImg)
      setSelectedBackdropImage(imageUrl)
      setFieldValue('coverImage',backdropImage)
    }
    if(!selectedIconImage && type == 'icon'){
      let iconImg = e.currentTarget.files[0]
      let imageUrl = URL.createObjectURL(iconImg)
      setSelectedIconImage(imageUrl)
      setFieldValue('iconImage',iconImg)
    }
      console.log(e.currentTarget.files)
    }
        }
        
      let removeShownImage = (type:string) => {
        switch (type) {
          case 'icon':
            setSelectedIconImage(null);
            if( iconImage.current)
              iconImage.current.value == null
            break;

          default:
          setSelectedBackdropImage(null);
          if( backdropImage.current)
            backdropImage.current.value == null
            break;
        }
            // setFieldValue('coverImage',null);
           
           
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
      <div className="flex items-center gap-[10px]">
      <label className='text-[15px] fontcl main-f' htmlFor="icon">Add icon picture</label>
      {
        selectedIconImage &&
        <div onClick={()=>removeShownImage('icon')} className='bcu text-red-600 text-[16px]'>
<IoIosRemoveCircleOutline />
      </div>
      }
      </div>
        <input multiple onChange={(e)=>showImage('icon',e,setFieldValue)} type="file" ref={iconImage} hidden id='icon' name='icon' className='fontcl text-[16px] main-f w-full'/ >
                      {
                          selectedIconImage ?
                          <div onClick={()=>iconImage.current?.click()} className="w-[80px] h-[80px] relative rounded-[10px] bcu">
                              <div className='text-[16px] z-[2] text-white absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'>
                                <TbPhotoEdit />
                              </div>
                              <img src={selectedIconImage} alt="" className='backdrop rounded-[10px] w-[80px] h-[80px] pic'/>
                          </div>
                          :
                          <div type='button' onClick={()=>iconImage.current?.click()} className="relative bcu w-[80px] h-[80px] rounded-[10px] bg-[#eee]">
                      <div className='text-[16px] fontcl3 absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'>
                        <RiImageAddLine />
                      </div>
                      </div>
                      }
             </div>
        <div className="flex flex-col gap-[5px] w-full main-f">
        <div className="flex items-center gap-[10px]">
      <label className='text-[15px] fontcl main-f' htmlFor="icon">Add backdrop picture</label>
      {
        selectedBackdropImage &&
        <div onClick={()=>removeShownImage('backdrop')} className='bcu text-red-600 text-[16px]'>
<IoIosRemoveCircleOutline />
      </div>
      }
      </div>
              <input multiple onChange={(e)=>showImage('backdrop',e,setFieldValue)} type="file" ref={backdropImage} hidden id='backdrop' name='backdrop' className='fontcl text-[16px] main-f w-full'/ >
                      {
                          selectedBackdropImage ?
                          <div onClick={()=>backdropImage.current?.click()} className="w-full h-[200px] relative rounded-[10px] bcu">
                              <div className='text-[36px] z-[2] text-white absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'>
                                <TbPhotoEdit />
                              </div>
                              <img src={selectedBackdropImage} alt="" className='backdrop rounded-[10px] w-full h-[200px] pic'/>
                          </div>
                          :
                          <div type='button' onClick={()=>backdropImage.current?.click()} className="relative bcu w-full h-[200px] rounded-[10px] bg-[#eee]">
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