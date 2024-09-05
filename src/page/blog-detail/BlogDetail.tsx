import React from 'react'
import './index.css'
import { IoCopyOutline } from "react-icons/io5";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  return (
    <div className={'lg:w-[500px] md:w-[90%] w-[700px] mx-auto mt-[20px] flex flex-col gap-[60px]'}>
      <div className="w-full flex flex-warp items-center justify-start gap-[10px]">
        <Link to='/' className='w-[120px] trans font-[600] btn2 main-f text-[15px] text-center'>Edit Post</Link>
        <button className='w-[120px] trans font-[600] btn-warn main-f text-[15px]'>Delete Post</button>

      </div>
        <div className="flex items-center md:gap-[15px] gap-[20px] ">
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
            <div className="flex fontcl3 main-f md:text-[14px] text-[15px] gap-[12px]">
           
            <p>Adventure</p>
            <p>Arcade</p>
                </div>
               
            </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
        <pre className="twrap fontcl main-f text-[18px]">
        Mauris quis maximus felis. Mauris tempor ipsum vel mauris rhoncus porta. Donec semper volutpat lectus a sodales. Vivamus tincidunt quis lectus imperdiet luctus. Etiam sit amet nisi feugiat sem pretium dictum. Donec vestibulum nisl vel lacus hendrerit, vel consequat odio vulputate. Maecenas consequat dolor in nisi malesuada suscipit.
        </pre>
        <img src={'/static-imgs/gamebd.jpg'} alt="" className="pic  w-full h-[auto] rounded-[10px]" />
        <pre className="fontcl twrap main-f text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam, est a convallis fringilla, nisi lorem iaculis diam, at scelerisque risus ex tempor diam. Suspendisse eget aliquet eros. Integer porta ipsum nec libero posuere, ut placerat tortor pretium. Cras vel purus sit amet libero maximus eleifend interdum vitae nulla. Sed gravida tristique eros, eget aliquet turpis tincidunt sed. Etiam sed fringilla quam, ut sodales elit. Nulla accumsan iaculis semper. Aenean consequat sit amet lectus in pharetra. Ut ut nisi elit. Aliquam ut leo aliquam leo interdum faucibus et sed urna. Nam varius sem lacus, sed porttitor est tincidunt consequat. Fusce gravida ac ipsum quis blandit. Cras in nisi porta, ullamcorper nulla non, semper dolor. Maecenas lobortis sollicitudin nisl, at faucibus justo blandit nec. Fusce sed porta ante, sed gravida justo. Vivamus sit amet libero faucibus, pharetra risus sit amet, aliquet magna.

Curabitur rhoncus placerat ipsum, non mattis nibh mattis quis. Maecenas efficitur pretium turpis, sed viverra tellus vehicula eget. Integer non bibendum libero, quis iaculis odio. Aliquam pellentesque ipsum leo, ut ornare erat vestibulum ac. Suspendisse eros felis, sagittis sed tortor a, luctus hendrerit orci. Ut ut ultrices est, ac laoreet justo. Vestibulum in consequat massa. Suspendisse rutrum quam vitae scelerisque ultricies. Aenean velit justo, imperdiet ac congue at, egestas at diam. Aenean malesuada lectus massa, non venenatis diam tempus eu. Aenean eros ante, maximus ultrices cursus ut, ornare eu metus. Nunc fermentum posuere ullamcorper. Etiam tristique velit consequat, blandit massa vitae, auctor enim.

Mauris quis maximus felis. Mauris tempor ipsum vel mauris rhoncus porta. Donec semper volutpat lectus a sodales. Vivamus tincidunt quis lectus imperdiet luctus. Etiam sit amet nisi feugiat sem pretium dictum. Donec vestibulum nisl vel lacus hendrerit, vel consequat odio vulputate. Maecenas consequat dolor in nisi malesuada suscipit.
        </pre>
        </div>
        <div className="flex flex-col w-full gap-[60px]">
          <div className="flex w-full justify-between sm:flex-col gap-[30px] min:items-center">
          <div className="flex gap-[15px]">
          <img src="https://i.pinimg.com/236x/69/6c/c1/696cc1d1d134040dd2563328d7b6e5a3.jpg" alt="" className="w-[50px] h-[50px] rounded-[5px] pic" />
          <div className="flex flex-col gap-[1px]">
          <p className="fontcl main-f md:text-[16px] text-[18px] font-[600]">Subway Surfers</p>
          <div className="flex fontcl3 main-f text-[13px] gap-[12px]">
           <p>Adventure</p>
           <p>Arcade</p>
               </div> 
              </div>
          </div>
          <div className="btn1 sm:w-full w-fit bcu trans">
          <div  className="flex w-full justify-center main-f py-[3px] items-center gap-[5px]">
            <div className="  main-f text-[20px]">
              <PiDownloadSimple />
            </div>
            <p className="text-[15px]">Go to download</p>
          </div >
          </div>
          </div>
          <div className="md:hidden flex w-full justify-between items-center">
            <div className=" flex main-f flex-col items-center justify-center">
            <div className="flex items-center text-[16px] font-[600] main-f ftoncl gap-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
                <div>3.7</div>
            </div>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className=" flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">Offline</h2>
            <p className="fontcl3 text-[12px]">Status</p>
            </div>
    <div className="w-[.5px] h-[45px] sm:hidden bg-[#d2d2d2]"></div>
            <div className=" flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">155mb</h2>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className=" flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">30 May,2020</h2>
            <p className="fontcl3 text-[12px]">Released on</p>
            </div>
            
          </div>
{
//mb
}
          <div className="MD:hidden flex gap-[20px] w-full flex-wrap justify-between items-center">
            <div className="prt bg-red-0 flex justify-evenly items-center w-full">
            <div className=" flex main-f flex-col items-center justify-center">
            <div className="flex items-center text-[16px] font-[600] main-f ftoncl gap-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
                <div>3.7</div>
            </div>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className=" flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">Offline</h2>
            <p className="fontcl3 text-[12px]">Status</p>
            </div>
            </div>
            <div className="prt bg-red-0 flex justify-evenly items-center w-full">
            <div className=" flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">155mb</h2>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className=" flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">30 May,2020</h2>
            <p className="fontcl3 text-[12px]">Released on</p>
            </div>
            </div>
           
            
            
          </div>
        </div>
    </div>
  )
}

export default BlogDetail

{/* <div className="flex w-full flex-wrap justify-between items-center">
            <div className="flex w-[50%]  items-center justify-between">
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <div className="flex items-center text-[16px] font-[600] main-f ftoncl gap-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
                <div>3.7</div>
            </div>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">Offline</h2>
            <p className="fontcl3 text-[12px]">Status</p>
            </div>
            </div>
    <div className="flex w-[50%]  items-center justify-between">
    <div className="w-[.5px] h-[45px] sm:hidden bg-[#d2d2d2]"></div>
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">155mb</h2>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">30 May,2020</h2>
            <p className="fontcl3 text-[12px]">Released on</p>
            </div>
    </div>
            
          </div> */}