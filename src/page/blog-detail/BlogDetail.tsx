import React from 'react'
import './index.css'
import { IoCopyOutline } from "react-icons/io5";

const BlogDetail = () => {
  return (
    <div className={'lg:w-[500px] md:w-[90%] w-[700px] mx-auto mt-[20px] flex flex-col gap-[60px]'}>
        <div className="flex md:gap-[15px] gap-[20px] ">
            <img src="https://i.pinimg.com/236x/69/6c/c1/696cc1d1d134040dd2563328d7b6e5a3.jpg" alt="" className=" md:w-[45px] md:h-[45px] w-[60px] h-[60px] rounded-[5px] pic" />
            <div className=" w-full flex flex-col">
            <div className="flex justify-between ">
                <p className="fontcl main-f md:text-[18px] text-[23px] font-[600]">Subway Surfers</p>
               <div className={'flex main-f fontcl gap-[4px] bcu items-center'}>
                <p className="md:text-[10px] text-[13px]">Copy</p>
                <div className="md:text-[14px] text-[16px]">
                <IoCopyOutline />
                </div>
               </div>
            </div>
            <div className="flex fontcl3 main-f md:text-[14px] text-[15px] gap-[20px]">
            <p>Adventure</p>
            <p>Arcade</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
        <div className="fontcl main-f text-[18px]">
        Mauris quis maximus felis. Mauris tempor ipsum vel mauris rhoncus porta. Donec semper volutpat lectus a sodales. Vivamus tincidunt quis lectus imperdiet luctus. Etiam sit amet nisi feugiat sem pretium dictum. Donec vestibulum nisl vel lacus hendrerit, vel consequat odio vulputate. Maecenas consequat dolor in nisi malesuada suscipit.
        </div>
        <img src={'/static-imgs/gamebd.jpg'} alt="" className="pic w-full h-[auto] rounded-[10px]" />
        <div className="fontcl main-f text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam, est a convallis fringilla, nisi lorem iaculis diam, at scelerisque risus ex tempor diam. Suspendisse eget aliquet eros. Integer porta ipsum nec libero posuere, ut placerat tortor pretium. Cras vel purus sit amet libero maximus eleifend interdum vitae nulla. Sed gravida tristique eros, eget aliquet turpis tincidunt sed. Etiam sed fringilla quam, ut sodales elit. Nulla accumsan iaculis semper. Aenean consequat sit amet lectus in pharetra. Ut ut nisi elit. Aliquam ut leo aliquam leo interdum faucibus et sed urna. Nam varius sem lacus, sed porttitor est tincidunt consequat. Fusce gravida ac ipsum quis blandit. Cras in nisi porta, ullamcorper nulla non, semper dolor. Maecenas lobortis sollicitudin nisl, at faucibus justo blandit nec. Fusce sed porta ante, sed gravida justo. Vivamus sit amet libero faucibus, pharetra risus sit amet, aliquet magna.

Curabitur rhoncus placerat ipsum, non mattis nibh mattis quis. Maecenas efficitur pretium turpis, sed viverra tellus vehicula eget. Integer non bibendum libero, quis iaculis odio. Aliquam pellentesque ipsum leo, ut ornare erat vestibulum ac. Suspendisse eros felis, sagittis sed tortor a, luctus hendrerit orci. Ut ut ultrices est, ac laoreet justo. Vestibulum in consequat massa. Suspendisse rutrum quam vitae scelerisque ultricies. Aenean velit justo, imperdiet ac congue at, egestas at diam. Aenean malesuada lectus massa, non venenatis diam tempus eu. Aenean eros ante, maximus ultrices cursus ut, ornare eu metus. Nunc fermentum posuere ullamcorper. Etiam tristique velit consequat, blandit massa vitae, auctor enim.

Mauris quis maximus felis. Mauris tempor ipsum vel mauris rhoncus porta. Donec semper volutpat lectus a sodales. Vivamus tincidunt quis lectus imperdiet luctus. Etiam sit amet nisi feugiat sem pretium dictum. Donec vestibulum nisl vel lacus hendrerit, vel consequat odio vulputate. Maecenas consequat dolor in nisi malesuada suscipit.
        </div>
        </div>
    </div>
  )
}

export default BlogDetail