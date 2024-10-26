import React from 'react'

import { GoKebabHorizontal } from "react-icons/go";

import { GoMortarBoard } from "react-icons/go";

import { FaGithub } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { GoGitPullRequest } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
const Home3 = () => {
  return (
    <div>
        



        <div className="bg-black pt-3 flex">
            <div className="border  border-slate-600 rounded bg-gray-800 w-[313px] h-[157px] ml-5 p-5 ">
              <b><div className="text-slate-200 text-sm">
                Simplify your development workflow with a GUI
              </div></b>
              <div className="flex mt-3">
                <div>
                  <button className="text-3xl  text-fuchsia-700 bg-slate-50 rounded-full border border-white">
                    <FaGithub />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-400 ml-4"> <a className="text-sm text-sky-400" href="http://">Install Github Desktop</a> to visualize, commit, and push changes without ever touching the command line.</p>
                </div>

              </div>
            </div>
            <div className="border  border-slate-600 rounded bg-gray-800 w-[313px] h-[157px] ml-5 p-5 ">
              <b><div className="text-slate-200 text-sm">
                Get AI-based coding suggestions
              </div></b>
              <div className="flex mt-3">
                <div>
                  <button className="text-4xl  text-slate-100">
                    <GoCopilot />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-400 ml-4"> <a className="text-sm text-sky-400" href="http://">Try Github Copilot free for 30 days,</a> which suggests entire functions in real time, right from your editor.</p>
                </div>

              </div>
            </div>
          </div>
          <div className=" bg-black w-[690px] pt-5">
            <div className=" pl-5 pt-2 flex">
              <button className="bg-gray-800 text-slate-400 p-2 rounded-full ">
                <GoMortarBoard />
              </button>
              <div className="text-gray-400 text-sm mt-1 ml-2">
                Get started on github
              </div>
              <div className="text-slate-100 text-xl mt-1 ml-[455px]">
                <GoKebabHorizontal />
              </div>
            </div>

          </div>
          <div className="bg-black pt-3 flex">
            <div className="border border-slate-400 w-[313px] h-[230px] ml-5 ">
              <iframe
                className="w-full h-[225px]"
                src="https://www.youtube.com/embed/RGOj5yH7evk"
              ></iframe>
            </div>

            <div className="border  border-slate-600 rounded bg-gray-800 w-[313px] h-[230px] ml-5 p-4 ">
              <div className="text-gray-300 text-2xl">
                <GoGitPullRequest />
              </div>
              <b><div className="text-slate-100 text-sm pt-3">
                Follow this exercise to try the GitHub flow
              </div></b>
              <div className="text-sm text-slate-400 mt-3">
                GitHub's “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.
              </div>
              <button
                className="bg-gray-700 hover:bg-gray-600 border  border-slate-600 text-white  font-bold py-2 px-3 rounded-md text-xs mt-5"
              >
                Try the Github flow
              </button>
            </div>
          </div>
          <div className="bg-black pt-5   ">
            <div className="border  border-slate-600 rounded flex bg-gray-800 h-[280px] ml-5  p-4 w-[647px]">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="text-slate-400 text-xl">
                    <GoGraph />
                  </div>
                  <div className="text-slate-400 text-sm pl-2 ">
                    <p>Trending repositories  .  <a className="p-2 text-blue-400" href="http://">See more</a></p>
                  </div>
                  <div className="text-slate-200 text-xl mt-1 ml-[340px]">
                    <GoKebabHorizontal />
                  </div>
                </div>
                <div className="flex mt-4">
                  <img className="h-6  " src="https://avatars.githubusercontent.com/u/141457985?s=280&v=4" alt="img" />
                  <div>
                    <b> <a className="text-sm text-white mr-9  ml-3 hover:underline hover:text-blue-400" href="http://">Skyvern-AI/skyvern</a></b>
                  </div>

                  <button
                    className="bg-gray-700 hover:bg-gray-500 border flex  border-slate-600 text-gray-300  font-bold py-1 px-1 rounded-md ml-80 "
                  >
                    <GoStar />
                    <div className="text-xs  pl-3 pr-3 text-white">Star</div>
                    <GoTriangleDown />
                  </button>

                </div>
                <div className="text-sm text-white mt-2">
                  Automate browser-based workflows with LLMs and Computer Vision

                </div>
                <div className="flex">
                  <div className="text-2xl text-blue-400 flex mt-2">
                    <GoDotFill />
                    <div className="text-slate-400 text-xs mt-1">Python</div>
                  </div>
                  <div className="text-slate-400 mt-3 flex ml-5">
                    <GoStar />
                    <p className="text-sm ml-1">6.5k</p>
                  </div>
                </div>
                <div className="border-b border-gray-500 mt-3">

                </div>
                <div className="flex mt-4">
                  <img className="h-6  " src="https://media.licdn.com/dms/image/v2/D560BAQGPfvRREe2Dfg/company-logo_200_200/company-logo_200_200/0/1713938225100/openinterpreter_logo?e=2147483647&v=beta&t=0yZpFE0Uybj9Y-UYtrY8QblJOtFhmqKSYh2_troJLCU" alt="img" />
                  <div>
                    <b> <a className="text-sm text-white   ml-3 hover:underline hover:text-blue-400" href="http://">OpenInterpreter/open-interpreter</a></b>
                  </div>

                  <button
                    className="bg-gray-700 hover:bg-gray-500 border flex  border-slate-600 text-gray-300  font-bold py-1 px-1 rounded-md ml-64 "
                  >
                    <GoStar />
                    <div className="text-xs  pl-3 pr-3 text-white">Star</div>
                    <GoTriangleDown />
                  </button>

                </div>
                <div className="text-sm text-white mt-2">
                  A natural language interface for computers

                </div>
                <div className="flex">
                  <div className="text-2xl text-blue-400 flex mt-2">
                    <GoDotFill />
                    <div className="text-slate-400 text-xs mt-1">Python</div>
                  </div>
                  <div className="text-slate-400 mt-3 flex ml-5">
                    <GoStar />
                    <p className="text-sm ml-1">52.9k</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

      
    </div>



  )
}

export default Home3
