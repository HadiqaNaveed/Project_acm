import React from 'react'
import { GoRepo } from "react-icons/go";
import { GoFilter } from "react-icons/go";
import { GoCode } from "react-icons/go";
import { GoKebabHorizontal } from "react-icons/go";


import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";

import { GoStar } from "react-icons/go";

import { GoDotFill } from "react-icons/go";
import Home2 from './Home2';
import Home3 from './Home3';
const Home = () => {
  return (

    <>
      <div className="flex">
        <div className="border border-slate-600">

          <div className="w-80 h-96 bg-gray-900 sticky top-0 z-10 ">

            <div className="flex items-center ">
              <div className=" text-white text-sm m-3 mt-11 ml-6 ">
                <b> Top repositories</b>


                <button className="bg-green-700 hover:bg-green-500 text-white  font-bold py-1 px-2 ml-24 rounded-md text-sm">
                  <div className="flex items-center ">
                    <div><GoRepo /></div>
                    <div className="pl-2">New</div>

                  </div>
                </button>
              </div>

            </div>
            <div className="text-gray-100 text-sm  ml-6 flex items-center ">

              <input type="text" placeholder="Find repository"
                className="border border-gray-600 bg-gray-900 rounded-md py-1 pl-3 pr-24 focus:outline-none " />

            </div>
            <div className="flex  items-center m-3 ml-4 text-white">

              <div className="text-xl text-slate-400 p-2 ">
                <img className="rounded-full h-4" src="https://wallpapers.com/images/hd/pink-angel-cool-profile-picture-wcjxfrrq0kjq98yb.jpg" alt="pic" />
              </div>

              <a className="text-sm hover:underline" href="http://">HadiqaNaveed/Project_acm</a>
            </div>



          </div>
          <div className="w-80 h-[1108px]   bg-gray-900">




          </div>

          <div>
          </div>
        </div>
        <div className="flex-col">
          <div className="w-[690px] h-16 bg-black flex  p-5 " >

            <b><div className="text-white text-2xl mr-14">
              Home
            </div></b>
            <div className="text-sky-600 text-sm ml-80 mt-3 hover:underline">
              <a href="http://">Send feedback</a>
            </div>
            <div>
              <button className="bg-gray-700 hover:bg-slate-800 text-gray-400  mt-2 ml-5 text-xl  font-bold py-1 px-3 rounded-md border border-slate-600 ">
                <div className="flex items-center ">
                  <GoFilter />
                  <div className="pl-2 text-sm text-white  ">Filter</div>

                </div>
              </button>
            </div>


          </div>

          <div className=" bg-black w-[690px] ">
            <div className=" pl-5 pt-2 flex">
              <button className="bg-gray-800 text-slate-400 p-2 rounded-full ">
                <GoCode />
              </button>
              <div className="text-gray-400 text-sm mt-1 ml-2">
                Start writting code
              </div>
              <div className="text-slate-100 text-xl mt-1 ml-[470px]">
                <GoKebabHorizontal />
              </div>
            </div>

          </div>


          <Home2 />







          <Home3 />
          <div className="bg-black pt-20  pl-8 flex   ">
            <div className="flex   text-xs text-slate-400">
              <div className="text-2xl">
                <IoLogoGithub />
              </div>
              <div className="  text-slate-400 font-extralight pt-2 pl-1">
                <AiOutlineCopyrightCircle />

              </div>
              <p className=" font-extralight pt-1 pl-1 ">2024 Github ,Inc</p>

            </div>
            <div className="flex flex-col pl-14">
              <div className="flex  text-xs text-gray-400  ">
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Terms</a>
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Privacy</a>
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Security</a>
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Status</a>
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Docs</a>
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Contact</a>
                <a className=" font-extralight pl-4 hover:underline hover:text-sky-600 " href="http://">Manage cookies</a>

              </div>
              <div className="text-xs text-gray-400 pt-3 pl-10 h-[82px] bg-black hover:underline">
                <a className=" font-extralight pl-5 hover:underline hover:text-sky-600 " href="http://">Donot share my personal information</a>
              </div>
            </div>

          </div>





        </div>
        <div className="bg-black  h-[1494px] w-96">
          <div className="border-gray-600 bg-gray-900 border h-[527px] p-4 rounded-md w-[307px] ml-1 mt-5">
            <b><div className="text-slate-200 text-sm">
              Explore repositories
            </div></b>

            <div className="flex mt-4">
              <img className="h-5 mt-1 rounded-full " src="https://avatars.githubusercontent.com/u/2641063?s=200&v=4" alt="img" />
              <div>
                <b> <a className="text-sm text-white mr-9  ml-3 hover:underline " href="http://">Locustio/loctus</a></b>
              </div>

              <button
                className="bg-gray-700 ml-16 hover:bg-gray-500 border flex  border-slate-600 text-gray-300  font-bold py-1 px-3 rounded-md  "
              >
                <GoStar />

              </button>

            </div>
            <div className="text-xs text-gray-400 mt-4">
              Write scalable load tests in plain Python 🚗💨

            </div>
            <div className="flex mt-1">
              <div className="text-slate-400 mt-3 flex">
                <GoStar />
                <p className="text-xs ml-1">24.9k</p>
              </div>
              <div className="text-2xl text-blue-400 ml-5 flex mt-2">
                <GoDotFill />
                <div className="text-slate-400 text-xs  mt-1">Python</div>
              </div>

            </div>
            <div className="border-b border-gray-500 mt-3">

            </div>

            <div className="flex mt-4">
              <img className="h-5 mt-1 rounded-full " src="https://curl.se/logo/curl-symbol.png" alt="img" />
              <div>
                <b> <a className="text-sm text-white mr-8  ml-3 hover:underline" href="http://">curl/curl</a></b>
              </div>

              <button
                className="bg-gray-700 ml-28 hover:bg-gray-500 border flex  border-slate-600 text-gray-300  font-bold py-1 px-3 rounded-md  "
              >
                <GoStar />

              </button>

            </div>
            <div className="text-xs text-gray-400 mt-4">
              A command line tool and library for transferring data with URL syntax, supporting DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP…
            </div>
            <div className="flex mt-1">
              <div className="text-slate-400 mt-3 flex">
                <GoStar />
                <p className="text-xs ml-1">35.8k</p>
              </div>
              <div className="text-2xl text-gray-600 ml-5 flex mt-2">
                <GoDotFill />
                <div className="text-slate-400 text-xs  mt-1">C</div>
              </div>

            </div>
            <div className="border-b border-gray-500 mt-3">

            </div>




            <div className="flex mt-4">
              <img className="h-5 mt-1 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZHrzghoRTKWEoyyyE7QSjYAocX27jkqezA&s" alt="img" />
              <div>
                <b> <a className="text-sm text-white mr-8  ml-3 hover:underline" href="http://">audacity/audacity</a></b>
              </div>

              <button
                className="bg-gray-700 ml-12 hover:bg-gray-500 border flex  border-slate-600 text-gray-300  font-bold py-1 px-3 rounded-md  "
              >
                <GoStar />

              </button>

            </div>
            <div className="text-xs text-gray-400 mt-4">
              Audio Editor
            </div>
            <div className="flex mt-1">
              <div className="text-slate-400 mt-3 flex">
                <GoStar />
                <p className="text-xs ml-1">12.5k</p>
              </div>
              <div className="text-2xl text-gray-600 ml-5 flex mt-2">
                <GoDotFill />
                <div className="text-slate-400 text-xs  mt-1">C</div>
              </div>

            </div>
            <div className="text-sm hover:underline mt-7 text-blue-400 hover:text-blue-400">
              <a href="http://">Explore more →</a>
            </div>
          </div>
          <div className="border-b border-gray-500 mt-[900px] w-[307px] ml-1">

          </div>


        </div>



      </div >

    </>
  )
}

export default Home
