import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { GoIssueOpened } from "react-icons/go";
import { GoGitPullRequest } from "react-icons/go";
import { GoTable } from "react-icons/go";
import { GoCommentDiscussion } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { GoTelescope } from "react-icons/go";
import { GoGift } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import { GoX } from "react-icons/go";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { PiNotificationLight } from "react-icons/pi";
import { GoSmiley } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoCopilot } from "react-icons/go";

const NavBar = () => {
  const toggleLeftPanel = () => {
    const panel = document.getElementById('left-panel');
    panel.classList.toggle('-translate-x-full');
  };

  const toggleRightPanel = () => {
    const panel = document.getElementById('right-panel');
    panel.classList.toggle('translate-x-full');
  };

  return (
    <>

      <div className="flex  items-center p-2 bg-black text-white border border-slate-600">
        <button className="text-gray-400 text-1xl  mr-4 m-2 hover:bg-slate-800 p-1 font-extralight border border-slate-500 rounded" onClick={toggleLeftPanel}>
          <VscThreeBars />
        </button>
        <div className="text-4xl">
          <IoLogoGithub />
        </div>

        <button
          className="bg-black hover:bg-slate-800 text-white mr-64 font-bold py-1 px-2 rounded text-sm"
        >
          Dashboard
        </button>

        <div className="text-gray-100  ml-96 flex items-center ">

          <input type="text" placeholder="⌕ Type to search..."
            className="border border-gray-600 text-sm bg-black rounded-md py-1 px-12 p-2 focus:outline-none " />

        </div>
        <div>
          <button className="py-3  m-3 border-l-2  border-slate-500">

          </button>
        </div>
        <div >
          <button className="text-gray-400 text-1xl hover:bg-slate-800 hover:  py-2 px-2 border border-slate-500 rounded-md">
            <div className="flex items-center">
              <GoPlus />
              <div className="text-sm">
                <FaCaretDown />
              </div>
            </div>
          </button>

        </div>
        <div>
          <button className="text-gray-400 text-1xl m-2 hover:bg-slate-800 py-2 px-2 border border-slate-500 rounded-md">
            <GoIssueOpened />
          </button>

        </div>
        <div>
          <button className="text-gray-400 text-1xl  hover:bg-slate-800 py-2 px-2 border border-slate-500 rounded-md">
            <GoGitPullRequest />
          </button>

        </div>
        <div>
          <button className="text-gray-400 text-1xl m-2 hover:bg-slate-800 py-2 px-2 border border-slate-500 rounded-md">
            <PiNotificationLight />
          </button>

        </div>
        <div onClick={toggleRightPanel}>
          <img className="rounded-full h-9" src="https://wallpapers.com/images/hd/pink-angel-cool-profile-picture-wcjxfrrq0kjq98yb.jpg" alt="pic" />
        </div>

      </div>

      <div id="left-panel"
        className="fixed top-0 left-0 h-full rounded-lg w-80 bg-slate-900 transform transition-transform duration-300 -translate-x-full z-50">
        <div className="flex  items-center  text-white ">
          <div className="text-4xl p-4 text-white">
            <IoLogoGithub />
          </div>
          <button
            className="bg-slate-800 text-slate-400  hover:text-white font-bold py-2 px-2 rounded ml-48" onClick={toggleLeftPanel}
          >
            <GoX />
          </button>
        </div>

        <div className="m-4">
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className="text-xl text-slate-400 p-2">
              <GoHome />

            </div>
            <p className="text-sm">Home</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded">

            <div className="text-xl text-slate-400 p-2">
              <GoIssueOpened />

            </div>
            <p className="text-sm">Issues</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded">

            <div className="text-xl text-slate-400 p-2">
              <GoGitPullRequest />

            </div>
            <p className="text-sm" >Pull requests</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded">

            <div className="text-xl text-slate-400 p-2">
              <GoTable />

            </div>
            <p className="text-sm">Projects</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded">

            <div className="text-xl text-slate-400 p-2">
              <GoCommentDiscussion />

            </div>
            <p className="text-sm">Discussions</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded">

            <div className="text-xl text-slate-400 p-2">
              <GoCodespaces />


            </div>
            <p className="text-sm">Codespaces</p>

          </div>
          <div className="border-b border-zinc-500">

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded my-3">

            <div className="text-xl text-slate-400 p-2">
              <GoTelescope />

            </div>
            <p className="text-sm">Explore</p>

          </div>
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded my-3">

            <div className="text-xl text-slate-400 p-2">
              <GoGift />

            </div>
            <p className="text-sm">Marketplace</p>

          </div>
          <div className="border-b border-zinc-500">

          </div>
          <div className="flex  items-center  text-gray-400 p-2">
            <p className="text-sm pr-48">repositories</p>
            <button
              className=" hover:bg-slate-800 text-gray-400  py-1 px-2 rounded "
            >
              <RiSearchLine />
            </button>

          </div>
          <div className="flex  items-center  text-white">

            <div className="text-xl text-slate-400 p-2">
              <img className="rounded-full h-4" src="https://wallpapers.com/images/hd/pink-angel-cool-profile-picture-wcjxfrrq0kjq98yb.jpg" alt="pic" />
            </div>
            <p className="text-sm">HadiqaNaveed/Project_acm</p>

          </div>

        </div>
        <div className="flex  items-center text-xs text-slate-400">

          <div className="  text-slate-400 font-extralight pl-3">
            <AiOutlineCopyrightCircle />

          </div>
          <p className=" font-extralight">2024 Github ,Inc</p>

        </div>
        <div className="flex  items-center text-xs text-sky-500 pt-3 hover:underline ">
          <a className=" font-extralight pl-3 " href="http://">About</a>
          <a className=" font-extralight pl-3 " href="http://">Blog</a>
          <a className=" font-extralight pl-3 " href="http://">Terms</a>
          <a className=" font-extralight pl-3 " href="http://">Privacy</a>
          <a className=" font-extralight pl-3 " href="http://">Security</a>
          <a className=" font-extralight pl-3 " href="http://">Status</a>

        </div>
        <div className="text-xs text-sky-500 pt-3 hover:underline">
          <a className=" font-extralight pl-3 " href="http://">Donot share my personal information</a>
        </div>
        <div className="text-xs text-sky-500 pt-3 hover:underline">
          <a className=" font-extralight pl-3 " href="http://">Manage cookies</a>
        </div>



      </div>
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
            <GoPerson />

            </div>
            <p className="text-sm">Your projects</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

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
            <GoPerson />

            </div>
            <p className="text-sm">Your stars</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Your gists</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Your organizations </p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Your enterprises</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Your sponsers</p>

          </div>
          <div className="border-b pt-3 border-zinc-500">

          </div>

          
          <div className="flex  items-center mt-2 text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Try enterprise</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Feature preview</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Settings</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">GitHub Docs</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Github Support</p>

          </div>
          
          <div className="flex  items-center  text-white  hover:bg-slate-800 rounded ">

            <div className=" text-slate-400 p-2">
            <GoPerson />

            </div>
            <p className="text-sm">Github Community</p>

          </div>
          
          
         
          
        </div>

      </div>















































































































































































    </>

  )
}

export default NavBar
