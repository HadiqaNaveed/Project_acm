
import React from 'react'
import { GoStar } from "react-icons/go";
import { GoArrowSwitch } from "react-icons/go";
import { GoRepo } from "react-icons/go";
import { GoX } from "react-icons/go";
import { GoProject } from "react-icons/go";
import { GoSmiley } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoCopilot } from "react-icons/go";
import { GoCodeSquare } from "react-icons/go";
import { GoOrganization } from "react-icons/go";
import { GoGlobe } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { GoUpload } from "react-icons/go";
import { GoBeaker } from "react-icons/go";
import { GoGear } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { GoDiscussionClosed } from "react-icons/go";
import { GoPeople } from "react-icons/go";
const toggleRightPanel = () => {
    const panel = document.getElementById('right-panel');
    panel.classList.toggle('translate-x-full');
  };

const Sidepanel = () => {
  return (
    <>
    <div>
       <div id="right-panel" className="fixed right-0 top-0 h-full w-[300px] rounded-lg bg-slate-900 shadow-lg p-4 transform translate-x-full transition-transform duration-300">
        <div className="flex flex-col">
          <div className="flex">
            <img className="rounded-full h-9" src="https://wallpapers.com/images/hd/pink-angel-cool-profile-picture-wcjxfrrq0kjq98yb.jpg" alt="pic" />
            <b><div className="text-slate-100 text-sm mt-2 ml-2 ">HadiqaNaveed</div></b>

            <button
              className=" text-slate-300 hover:bg-gray-600 hover:text-white font-bold py-2 px-2 rounded ml-20" onClick={toggleRightPanel}
            >
              <GoArrowSwitch />
            </button>
            <button
              className=" text-slate-300 hover:bg-gray-600 hover:text-white font-bold py-2 px-2 rounded " onClick={toggleRightPanel}
            >
              <GoX />
            </button>
          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded mt-3">

            <div className=" text-slate-400 p-2">
            <GoSmiley />

            </div>
            <p className="text-sm">Set status</p>

          </div>
          <div className="border-b pt-3 border-zinc-500">

          </div>

          <div className="flex  items-center  text-white mt-2 hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Your profile</p>

          </div>
          
          
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoRepo />

            </div>
            <p className="text-sm">Your repositories</p>

          </div>
          
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoCopilot />

            </div>
            <p className="text-sm">Your Copilot</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoProject />

            </div>
            <p className="text-sm">Your projects</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoStar />

            </div>
            <p className="text-sm">Your stars</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoCodeSquare />

            </div>
            <p className="text-sm">Your gists</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoOrganization />

            </div>
            <p className="text-sm">Your organizations </p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoGlobe />

            </div>
            <p className="text-sm">Your enterprises</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoHeart />

            </div>
            <p className="text-sm">Your sponsers</p>

          </div>
          <div className="border-b pt-3 border-zinc-500">

          </div>

          
          <div className="flex  items-center mt-2 text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoUpload />

            </div>
            <p className="text-sm">Try enterprise</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoBeaker />

            </div>
            <p className="text-sm">Feature preview</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoGear />

            </div>
            <p className="text-sm">Settings</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoBook />

            </div>
            <p className="text-sm">GitHub Docs</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPeople />

            </div>
            <p className="text-sm">Github Support</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoDiscussionClosed />

            </div>
            <p className="text-sm">Github Community</p>

          </div>
          </div>
          </div>
          
    </div>
    </>
  )
}

export default Sidepanel
