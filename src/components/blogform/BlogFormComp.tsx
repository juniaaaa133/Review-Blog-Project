import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { TbPhotoEdit } from 'react-icons/tb';
import { RiImageAddLine } from 'react-icons/ri';
import { BLOG, BLOGFORM } from '../../utils/interfaces/blog';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import './index.css'
import { Checkbox, DatePicker, DatePickerProps, Form, FormProps, GetProp, Input,Select, SelectProps } from 'antd';
import { Dayjs } from 'dayjs';
import { Option } from 'antd/es/mentions';
import { callAddProduct, callEditProduct, callShowProuct } from '../../utils/apis/calls/product';
import { callFetchCategories } from '../../utils/apis/calls/category';
import { CATEGORY } from '../../utils/interfaces/category';
import { useNavigate, useParams } from 'react-router';
import ErrorMsg from '../errorMsg/ErrorMsg';

interface BlogProps {
create? : boolean,
blog? : BLOG
}

const BlogFormComp = (props: BlogProps) => {

const {create,blog} = props;

let [message,setMessage] = useState<string | null>(null);
let [categoryArray,setCategoryArray] = useState< SelectProps["options"]>([])
const categoryOptions : SelectProps["options"] = [];
let [selectedCategory,setSelectedCategory] = useState<string[]>([]);
let [isLoading,setIsLoading] = useState<boolean>(true);
let [backdropFile,setBackdropFile] = useState<File | undefined>();
let [iconFile,setIconFile] = useState<File | undefined>();
let [selectedBackdropImage,setSelectedBackdropImage] = useState<string | null>(blog?.backdrop ? `${import.meta.env.VITE_API}/api/${blog.backdrop}`: null);
let [selectedIconImage,setSelectedIconImage] = useState<string | null>(blog?.icon ? `${import.meta.env.VITE_API}/api/${blog.icon}` : null);
let backdropImage = useRef<HTMLInputElement | null>(null);
let iconImage = useRef<HTMLInputElement | null>(null);
let redirect = useNavigate();
let {id} = useParams();

const formData = new FormData();

const fetchCategories = async () => {
const res = await callFetchCategories()
const categories = JSON.parse(res.data);

if(res.status == 200){
for (let i = 0; i < categories.length; i++) {
categoryOptions[i] = {
label : categories[i].name,
value : categories[i]._id
}
}
setCategoryArray(categoryOptions)
}
setIsLoading(false)
}

useEffect(()=>{
fetchCategories()
},[])

let status = [
{
mode : 'null',
label : "Hybird"
},
{
mode : 'false',
label : "Offline"
},
{
mode : 'true',
label : "Online"
},

]

const pickCategories = (value: string[]) => {
setSelectedCategory(value)
};

let showImage = (type : string,e : ChangeEvent<HTMLInputElement>) => {
if(e.currentTarget.files){
if( type === 'backdrop'){
let backdropImg= e.currentTarget.files[0]
let imageUrl = URL.createObjectURL(backdropImg)
setSelectedBackdropImage(imageUrl)
setBackdropFile(backdropImg)
}
if( type == 'icon'){
let iconImg = e.currentTarget.files[0]
let imageUrl = URL.createObjectURL(iconImg)
setSelectedIconImage(imageUrl)
setIconFile(iconImg)
}
}
}

let removeShownImage = (type:string) => {
switch (type) {
case 'icon':
setSelectedIconImage(null);
if( iconImage.current)
iconImage.current.value == null
setIconFile(undefined);
break;

default:
setSelectedBackdropImage(null);
if( backdropImage.current)
backdropImage.current.value == null
setBackdropFile(undefined);
break;
} 
}

const handleSubmit: FormProps<BLOG>['onFinish'] = async (values) => {
console.log(iconFile,backdropFile)
values.title && formData.append("title",values.title);
values.intro && formData.append("intro",values.intro);
values.overview && formData.append("overview",values.overview);
values.size && formData.append("size",values.size);
values.rating && formData.append("rating",values.rating);
values.releasedDate && formData.append("releasedDate",values.releasedDate);
values.gameUrl && formData.append("gameUrl",values.gameUrl);
values.isOnline && formData.append("isOnline",values.isOnline);
selectedCategory && selectedCategory.length !== 0 && formData.append("categories",JSON.stringify(selectedCategory));
iconFile && formData.append("icon",iconFile);
backdropFile && formData.append("backdrop",backdropFile);

try {
create ?
await callAddProduct(formData) :
await callEditProduct(id,formData)
redirect("/")
} catch (error) {
setMessage("Please check your form and try again.")
}
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
initialValues={{
isOnline : blog?.isOnline ? blog.isOnline : "null",
title : blog?.title ? blog.title : "",
gameUrl : blog?.gameUrl ? blog.gameUrl : "",
size : blog?.size ? blog.size : "",
releasedDate : blog?.releasedDate ? blog.releasedDate : "",
rating : blog?.rating ? blog.rating : "",
intro : blog?.intro ? blog.intro : "",
overview : blog?.overview ? blog.overview : ""

}}
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
name="gameUrl"
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
<Input className="w-full inp main-f fontcl text-[15px] h-[41px]" placeholder={'dd mm,yy'} />
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
>
<select className="bcu w-full inp main-f fontcl text-[15px] h-[41px]">
{
status.map((status)=>(
<option className={'text-[15px] bcu main-f fontcl'} value={status.mode}>{status.label}</option>
))
}
</select>
</Form.Item>

 <div className="flex flex-col gap-[10px]">
<p className="main-f fontcl text-[14px]">Add category</p>
{
isLoading ? 
<input type="text" value="Loading..." className={"w-full inp main-f fontcl text-[15px] h-[41px]"}/>
:
 <Select
 loading={isLoading}
 className='main-f fontcl text-[14px] h-[41px]'
 mode="multiple"
 allowClear
 placeholder="Add categories"
 onChange={pickCategories}
 options={categoryArray}
/>
 }
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
 <input multiple style={{display : "none"}} onChange={(e)=>showImage('icon',e)} type="file" ref={iconImage} hidden id='icon' name='icon'/ >
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
<input multiple style={{display : "none"}} onChange={(e)=>showImage('backdrop',e)} type="file" ref={backdropImage} hidden id='backdrop' name='backdrop'/ >
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
<Form.Item<BLOG>
 label="Description"
 name="intro"
 rules={[{ required: true, message: 'Description field must not be empty.' }]}
>
 <Input.TextArea style={{height : '260px'}} className="w-full inp main-f fontcl text-[15px]" placeholder={'Description'} />
 </Form.Item>
 <Form.Item<BLOG>
 label="Overview"
 name="overview"
 rules={[{ required: true, message: 'Overview field must not be empty.' }]}
>
 <Input.TextArea style={{height : '260px'}} className="w-full inp main-f fontcl text-[15px]" placeholder={'Overview'} />
 </Form.Item>
 {
  message !== null && <ErrorMsg text={message} />
 }
<button type='submit' className="btn1 main-f text-[15px] trans">{create ? "Post Blog" : "Update Blog" }</button>
</Form>

</div>
</div>
 
)
}

export default BlogFormComp