'use client'
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import MobileMenu from "../mobile-menu";
import { Menu } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
import { TypeAnimation } from "react-type-animation";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"



const NavBar = () => {

    const routes = [
        {label: 'Live', url:'/live'},
        {label: 'Prayer', url:'/prayer'},
        {label: 'Give', url: '/give'},
        {label:'Event', url:'/event'},
    ]
const sideroutes=[
        {label: 'About Us', url:'/about'},
        {label: 'Contact Us', url:'/contact'},
        {label: 'Sermon', url: '/sermon'},
        
]

    return ( 
        <div className="bg-[url('/first.png')] bg-cover bg-center md:px-10 px-4  h-[200px] md:h-[500px] py-4 text-yellow-500">
            <div className="flex items-center justify-between space-x-4 bg-black pl-4 py-2">
                {/* LOGO */}
                <Link href='/' className="flex space-x-2 items-center hover:text-gray-400 flex-1">
                    <Image src= '/logo.png' height={60} width={50} className="object-cover" alt="logo" />
                    <h3 className="hidden md:block font-bold  text-3xl ">RCCG</h3>
                </Link>
                {/* SOACIAL ICONS */}
                <div className="hidden md:flex items-center justify-center space-x-2 flex-1 ">
                    <Link target="_blank" href='https://www.facebook.com' ><FaFacebook size={28} color="blue" className="bg-white p-1 rounded-full"/> </Link>
                    <Link target="_blank" href='https://www.instagram.com'> <FaInstagram size={28}  color="black" className="bg-white p-1 rounded-full"/></Link>
                    <Link target="_blank" href='https://www.twitter.com'> <BsTwitterX size={28}  color="white" className="bg-black p-1 rounded-full"/></Link>
                    <Link target="_blank" href='https://www.youtube.com'>  <FaYoutube size={28}  color="red" className="bg-white p-1 rounded-full"/></Link>
                </div>

                {/* Menu Routes */}
                <div className="">
                    <MobileMenu />

                </div>
                <div className= "hidden  md:flex items-center justify-center pr-4 flex-1 ">
                    <div className="border border-white rounded-md flex items-center px-2 gap-4 ">
                        {routes.map((route)=>(
                            <Link className="" href={route.url} key={route.url}>
                                <div className="hover:text-white ">
                                {route.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* AVATAR AND DROPDOWN */}
                    <div className="flex items-center justify-center pl-2 text-center border rounded-full gap-2 ml-2 cursor-pointer ">
                        <div className="">
                        <RxAvatar size={26}  color="white" className="mr-1"/>
                        </div>
                        
                        <div className="flex pr-2">
                        <Sheet  >
                            <SheetTrigger >
                                <Menu/>
                            </SheetTrigger>
                            <SheetContent className="w-[200px] sm:w-[200px]h-[500px] top-0 bg-black text-yellow-600">
                                <div className="flex flex-col items-center pt-10  ">
                                    {sideroutes.map((item)=>(
                                        <div className="hover:text-white ">
                                            <Link href={item.url}>
                                            {item.label}
                                        </Link>
                                            </div>
                                        
                                    ))}
                                    <Separator />
                                    <div className="pt-6 flex flex-col items-center ">
                                        <Link className="hover:text-white" href= '/sign-in'>
                                            Sign In
                                        </Link>
                                        <Link className="hover:text-white" href='/sign-up'>
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    </div>
                </div>
            </div>
            {/* WELCOME */}
            <div className="p-[150px] w-full hidden md:block text-white ">
              
           
        <div className="bg-black p-4 opacity-90 text-center">
            <div className="text-3xl uppercase text-yellow-500">
            <TypeAnimation 
        sequence={[
          "Welcome to Redeem Church!",
          2000,
          "A place to connect with God and one another.",
          2000
        ]}
        repeat={Infinity}
        />
    </div>
    Join us for worship, fellowship, and service

</div>
            </div>
        </div>
     );
}
 
export default NavBar;