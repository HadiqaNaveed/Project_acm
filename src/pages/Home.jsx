import React from 'react'
import { GoRepo } from "react-icons/go";
import { GoFilter } from "react-icons/go";
import { GoCode } from "react-icons/go";
import { GoKebabHorizontal } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { GoMortarBoard } from "react-icons/go";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { GoGitPullRequest } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
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
          <div className="bg-black pt-3 flex">
            <div className="border  border-slate-600 rounded bg-gray-800 w-[313px] h-[377px] ml-5 p-5 ">
              <b><div className="text-slate-100 text-sm">
                Start a new repository for HadiqaNaveed
              </div></b>
              <div className="text-sm text-slate-400 mt-3">
                A repository contains all of your project's files, revision history, and collaborator discussion.
              </div>
              <b><div className="text-slate-100 text-sm mt-3">
                Repository name*
              </div></b>
              <div className="text-gray-100 text-sm   flex items-center ">

                <input type="text" placeholder="Name your repsitory..."
                  className="border border-gray-600 bg-gray-900 rounded-md py-1 pl-3 pr-24 focus:outline-blue-800 " />

              </div>

              <form className="mt-2">
                <input type="radio" name="ra" />
                <b><label className="text-slate-200  ml-2 text-sm" htmlFor="html">Public</label><br /></b>
                <p className="text-xs text-gray-400 ml-6">Anyone on the internet can see this repository</p>
                <input type="radio" name="ra" />
                <b><label className="text-slate-200 ml-2  text-sm" htmlFor="css">Private</label><br /></b>
                <p className="text-xs text-gray-400 ml-6">You choose who can see and commit to this repository</p>
              </form>
              <button
                className="bg-green-700 hover:bg-green-500 text-white  font-bold py-2 px-3 rounded-md text-xs mt-5"
              >
                Create a new repository
              </button>
            </div>
            <div className="border  border-slate-600 rounded bg-gray-800 w-[313px] h-[377px] ml-5 p-4 ">
              <b><div className="text-slate-100 text-sm">
                Introduce yourself with a profile README
              </div></b>
              <div className="text-sm text-slate-400 mt-3">
                Share information about yourself by creating a profile README, which appears at the top of your profile page.
              </div>
              <div className=" border border-slate-600 h-56 mt-5 rounded-md">
                <div className=" border border-slate-600 rounded h-11 bg-slate-900 flex " >
                  <div className="text-white text-xs p-3">
                    HadiqaNaveed
                  </div>
                  <div className="text-gray-400 text-xs  mr-1 py-3">
                    /
                  </div>
                  <div className="text-white text-xs py-3">
                    Readme
                  </div>
                  <div className="text-gray-400 text-xs ml-1 mr-1 py-3">
                    .md
                  </div>
                  <div className="pt-2 pl-4">
                    <button
                      className="bg-green-700 hover:bg-green-500 text-white  font-bold px-3 py-1  rounded-md text-xs "
                    >
                      Create
                    </button>
                  </div>

                </div>

                <div className="p-2 pl-4 font-mono">
                  <ol>
                    <li className="flex">
                      <div className="text-xs pl-1 pr-2 text-gray-400">
                        1 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        👋 Hi, I’m @HadiqaNaveed
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        2 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        👀 I’m interested in ...
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        3 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        🌱   I’m currently learning  ...
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        4 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        💞️ I’m looking to collaborate on.
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        5 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        📫 How to reach me ...
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        6 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        😄 Pronouns: ...
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        7 -
                      </div>

                      <div className="text-slate-100 text-xs">
                        ⚡ Fun fact: ...
                      </div>
                    </li>
                    <li className="flex pt-1">
                      <div className="text-xs pl-1 pr-2  text-gray-400">
                        8 -
                      </div>

                    </li>

                  </ol>
                </div>

              </div>
            </div>
          </div>
          <div className=" bg-black w-[690px] pt-3">
            <div className=" pl-5 pt-2 flex">
              <button className="bg-gray-800 text-slate-400 p-2 rounded-full ">
                <GoTools />
              </button>
              <div className="text-gray-400 text-sm mt-1 ml-2">
                Use tools of the trade
              </div>
              <div className="text-slate-100 text-xl mt-1 ml-[455px]">
                <GoKebabHorizontal />
              </div>
            </div>

          </div>
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
