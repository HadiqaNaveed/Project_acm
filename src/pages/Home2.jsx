import React from 'react'

const Home2 = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home2
