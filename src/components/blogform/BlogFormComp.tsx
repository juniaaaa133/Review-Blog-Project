import { Field, FormikProps, FormikProvider, FormikValues } from 'formik'
import React, { ChangeEvent, useRef, useState } from 'react'
import { SetFieldValue } from '../../utils/interfaces/formik';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiImageAddLine } from 'react-icons/ri';
import { BLOG, BLOGFORM } from '../../utils/interfaces/blog';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import './index.css'
import { categories } from '../../utils/data';
import { DatePicker, DatePickerProps, Form, FormProps, Input,Select } from 'antd';
import { Dayjs } from 'dayjs';
import { Option } from 'antd/es/mentions';

interface BlogProps extends BLOG {
  create? : boolean,
  categoryData? : string[]
}

const BlogFormComp = (props: BlogProps & FormikProps<BLOG>) => {

      const {
        create,
        categoryData,
        errors,
        setFieldValue,
      } = props;

      let [categoryArray,setCategoryArray] = useState<string[]>([])
      let [categoryOption,setCategoryOption] = useState<string>('')

      let [selectedBackdropImage,setSelectedBackdropImage] = useState<string | null>(null);
      let [selectedIconImage,setSelectedIconImage] = useState<string | null>(null);
      let backdropImage = useRef<HTMLInputElement | null>(null);
      let iconImage = useRef<HTMLInputElement | null>(null);

      let status = [
        {
        mode : 'false',
        label : "Offline"
      },
      {
        mode : 'true',
        label : "Online"
      },
      {
        mode : 'null',
        label : "Hybird"
      },
    ]

      const pickDate: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
        console.log(date, dateString);
      };

    let showImage = (type : string,e : ChangeEvent<HTMLInputElement>,setFieldValue : SetFieldValue) => {
    if(e.currentTarget.files){
    if(!selectedBackdropImage && type === 'backdrop'){
      let backdropImg = e.currentTarget.files[0]
      let imageUrl = URL.createObjectURL(backdropImg)
      setSelectedBackdropImage(imageUrl)
      setFieldValue("backdrop",backdropImg);

    }
    if(!selectedIconImage && type == 'icon'){
      let iconImg = e.currentTarget.files[0]
      let imageUrl = URL.createObjectURL(iconImg)
      setSelectedIconImage(imageUrl)
      setFieldValue('backdrop',iconImg)
    }
      console.log(e.currentTarget.files)
    }
        }
        
    let removeShownImage = (setFieldValue : SetFieldValue,type:string) => {
        switch (type) {
          case 'icon':
            setSelectedIconImage(null);
            setFieldValue("icon",null);
            if( iconImage.current)
              iconImage.current.value == null
            break;

          default:
          setSelectedBackdropImage(null);
          setFieldValue("backdrop",null);
          if( backdropImage.current)
            backdropImage.current.value == null
            break;
        }         
        }
      
    let selectCategory = (event : ChangeEvent<HTMLSelectElement>) => {
      setCategoryOption(event.currentTarget.value)
    }

    let addCategory = (category: string) => {
      console.log(category)
      setCategoryArray(categoryArr =>[...categoryArr,category])
      categoryData?.push(category)
      console.log(categoryData,'formmin')
      setFieldValue("categories",JSON.stringify(categoryData))
    }

    const handleSubmit: FormProps<BLOG>['onFinish'] = (values) => {
      console.log('Success:', values);
    };

    return (
      
<div className="absolute z-[9] top-0 w-full h-[100vh] bg-main">
<div className="flex flex-col sm:w-[80%] w-[400px] mt-[60px] m-auto gap-[30px] justify-center h-fit ">
  <Form
  className='flex flex-col w-full gap-[10px]'
  layout='vertical'
  name="basic"
  onFinish={handleSubmit}
  autoComplete="off"
>
<p className="fontcl main-f text-[22px] w-[100%]">{create ? 'Post new blog' : 'Update blog' }</p>

        <Form.Item<BLOG>
      label="Blog title"
      name="title"
      rules={[{ required: true, message: 'Title must not be empty.' }]}
    >
      <Input className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'Title'} />
      </Form.Item>
      <Form.Item<BLOG>
      label="App link url"
      name="url"
      rules={[{ required: true, message: 'Url field must not be empty.' }]}
    >
      <Input className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'App url link'} />
      </Form.Item>
      <Form.Item<BLOG>
      label="App size"
      name="size"
      rules={[{ required: true, message: 'Size field must not be empty.' }]}
    >
      <Input className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'Size in mb or gb'} />
      </Form.Item>
      <Form.Item<BLOG>
      label="App's released date"
      name="releasedDate"
      rules={[{ required: true, message: 'Released date field must not be empty.' }]}
    >
      <DatePicker onChange={pickDate} className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'Released date of app'} />
      </Form.Item>
      <Form.Item<BLOG>
      label="Rating (rate out of 5)"
      name="rating"
      rules={[
        {
           required: true,
           message: 'Rating field must not be empty.',
          }
        ]}
    >
      <Input className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'Rating'} />
      </Form.Item>
      <Form.Item<BLOG>
      label="Set app status"
      name="isOnline"
      rules={[
        {
           required: true,
           message: 'Status field must not be empty.',
          }
        ]}
    >
      <Select className="w-full inp main-f fontcl text-[15px] h-[41px]">
        {
          status.map((status)=>(
            <Option value={status.mode}>{status.label}</Option>
          ))
        }
      </Select>
      <Input className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'Rating'} />
      </Form.Item>
     
        <div className="flex flex-col gap-[5px] w-full">
      <label className='text-[15px] fontcl main-f' htmlFor="categories">Manage Category</label>
      <div className="flex items-center gap-[20px]">
      <select
        className=" inp main-f fontcl text-[15px] bcu h-[41px]"
         name="categoryData"
         onChange={(e)=>selectCategory(e)}
         >
        <option selected className={'bcu'} disabled value={""}>Select Category</option>
      {
        categories.map((category,idx) => (
          <option key={idx} className={'bcu'} value={category.name}>{category.name}</option>
        ))
      }
       </select>
       <button type="button" onClick={()=>addCategory(categoryOption)} className="btn1 w-[70px] main-f text-[15px] trans">Save</button>
      </div>
        </div>
        <div className="flex flex-warp items-center gap-[15px]">
    {
            categoryArray.length !== 0 &&
            categoryArray.map((category,idx) => (
              <div key={idx} className="bg-[#e2f7ff] rounded-[7px] text-[14px] main-f fpntcl w-fit h-fit px-[10px] py-[4px]">{category}</div>      
            ))
          }

        </div>
        <div className="flex flex-col gap-[5px] w-full main-f">
      <div className="flex items-center gap-[10px]">
      <label className='text-[15px] fontcl main-f' htmlFor="icon">Add icon picture</label>
      {
        selectedIconImage &&
        <div onClick={()=>removeShownImage(setFieldValue,'icon')} className='bcu text-red-600 text-[16px]'>
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
        <div onClick={()=>removeShownImage(setFieldValue,'backdrop')} className='bcu text-red-600 text-[16px]'>
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
        <button type='submit' className="btn1 main-f text-[15px] trans">{create ? "Post Blog" : "Update Blog" }</button>
</Form>
        
</div>
</div>
      
    )
}

export default BlogFormComp