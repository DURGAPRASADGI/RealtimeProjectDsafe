

import axios from "axios";

import React, { useEffect, useState } from "react";

 

const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [teamlist, setTeamlist] = useState([]);

  const [teams, setTeams] = useState([]);

  const [teamPlayerList, setTeamPlayerList] = useState([]);

  const [pop, setPop] = useState(false);

 

  useEffect(() => {

    const fectchDate = async () => {

      setIsLoading(true);

      try {

        const response = await axios.get(

          "http://localhost:8082/dsafetech/getAllMatches"

        );

        console.log(response.data);

        setTeamlist(response.data);

        setTeams(response.data);

      } catch (error) {

        console.log(error);

      }

      setIsLoading(false);

    };

    fectchDate();

  }, []);

  const searchTeam = (e) => {

    setTeamlist(

      teams.filter((team) =>

        team.teamName.toLowerCase().includes(e.target.value.toLowerCase())

      )

    );

  };

  //player details.
  const handClickByTeamPlayer = (emailId) => {

    const playerdata = teamlist.find((team) => team.emailId === emailId);

    setTeamPlayerList(playerdata.teamplayers);

    setPop((pre) => {

      return !pre;

    });

  };

  return (

    <>

      <div>

        <div>

          <span className="text-2xl font-bold whitespace-nowrap dark:text-white sm:pl-5">

            Team Details

          </span>

        </div>

 

        <br />

 

        <div>

          <form>

            <div className="relative w-60 sm:pl-5">

              <label

                for="default-search"

                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"

              >

                Search

              </label>

 

              <input

                type="search"

                id="default-search"

                className=" block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                placeholder="Search Team"

                onInput={searchTeam}

                required

              />

 

              {/* <button

                type="submit"

                className="text-white  absolute right-2.5 bottom-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

              >

                {" "}

                <svg

                  className="w-4 h-4 text-white dark:text-gray-400"

                  aria-hidden="true"

                  xmlns="http://www.w3.org/2000/svg"

                  fill="none"

                  viewBox="0 0 20 20"

                >

                  <path

                    stroke="currentColor"

                    stroke-linecap="round"

                    stroke-linejoin="round"

                    stroke-width="2"

                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"

                  />

                </svg>

              </button> */}

            </div>

          </form>

        </div>

 

        <br />

 

        <div className="p-5  bg-gray-100">

          <div className="overflow-auto rounded-lg shadow hidden   md:block ">

            <table className="w-full">

              <thead className="bg-gray-50 border-b-2 border-gray-200">

                <tr>

                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">

                    No.

                  </th>

 

                  <th className="p-3 text-sm font-semibold tracking-wide text-left">

                    TeamName

                  </th>

 

                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">

                    CoachName

                  </th>

                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">

                    CaptainName

                  </th>

 

                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">

                    Date

                  </th>

 

                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">

                    EmailId

                  </th>

 

                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">

                    ContactNo

                  </th>

 

                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">

                    Players Details

                  </th>

                </tr>

              </thead>

              {!isLoading && (

                <tbody className="divide-y divide-gray-100">

                  {teamlist.map((team, index) => (

                    <tr className="bg-white" key={index}>

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        <a

                          href="#"

                          className="font-bold text-blue-500 hover:underline"

                        >

                          {index + 1}

                        </a>

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        {team.teamName}

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">

                          {team.coachName}

                        </span>

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">

                          {team.captainName}

                        </span>

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        {team.date}

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        {team.emailId}

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        {team.contactnumber}

                      </td>

 

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                        <button

                          type="submit"

                          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                          onClick={() => handClickByTeamPlayer(team.emailId)}

                        >

                          Player Details

                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              )}

            </table>

          </div>

 

          {/* // Responsive */}

          {!isLoading && (

            <div className="grid grid-cols-1  md:grid-cols-2  sm:grid-cols-1   gap-4 md:hidden">

              {teamlist.map((team, index) => (

                <div

                  className="bg-white space-y-3 p-4 rounded-lg shadow"

                  key={index}

                >

                  <div className="flex items-center space-x-2 text-sm">

                    <div>

                      <a

                        href="#"

                        className="text-blue-500 font-bold hover:underline"

                      >

                        {index + 1}

                      </a>

                    </div>

 

                    <div className="text-gray-500">{team.date}</div>

                    <div>

                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">

                        {team.teamName}

                      </span>

                    </div>

                  </div>

 

                  <div className="text-sm text-gray-700">

                    {team.captainName}

                  </div>

 

                  <div className="text-sm font-medium text-black">

                    {team.coachName}

                  </div>

                  <div className="text-sm font-medium text-black">

                    {team.emailId}

                  </div>

 

                  <div className="text-sm font-medium text-black">

                    {team.contactnumber}

                  </div>

 

                  {/* <div className="text-sm font-medium text-black">

                    <button

                      type="submit"

                      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                    >

                      Click Here

                    </button>

                  </div> */}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

 

      {pop && (

        <div className=" fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#1a356ad6]  p-10">

          <div className="p-5  bg-gray-100">

            <div className="pb-5 space-x-5">

              <span className="text-2xl font-bold whitespace-nowrap dark:text-white sm:pl-5">

                Player Details

              </span>

              <button

                type="button"

                className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"

                onClick={() => setPop(!pop)}

              >

                Close

              </button>

            </div>

 

            <div className="flex flex-col">

              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">

                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                  <div className="overflow-hidden">

                    <table className="min-w-full text-center text-sm font-light">

                      <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">

                        <tr>

                          <th scope="col" className=" px-6 py-4">

                            {" "}

                            S.No.

                          </th>

                          <th scope="col" className=" px-6 py-4">

                            {" "}

                            playerName

                          </th>

                          <th scope="col" className=" px-6 py-4">

                            {" "}

                            proficiency

                          </th>

                          <th scope="col" className=" px-6 py-4">

                            EmailId

                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        {teamPlayerList.map((team, index) => (

                          <tr

                            className="border-b dark:border-neutral-500"

                            key={index}

                          >

                            <td className="whitespace-nowrap  px-6 py-4 font-medium">

                              {" "}

                              {index + 1}

                            </td>

                            <td className="whitespace-nowrap  px-6 py-4">

                              {" "}

                              {team.playerName}

                            </td>

                            <td className="whitespace-nowrap  px-6 py-4">

                              {team.proficiency}

                            </td>

                            <td className="whitespace-nowrap  px-6 py-4">

                              {" "}

                              {team.address}

                            </td>

                          </tr>

                        ))}

                      </tbody>

                    </table>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </>

  );

};

 

export default Dashboard;
