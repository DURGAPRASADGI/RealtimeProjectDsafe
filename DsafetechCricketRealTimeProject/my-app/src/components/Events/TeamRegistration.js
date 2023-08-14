import axios from "axios";
import React, { useEffect, useState } from "react";
import UseCaustomHook from "./UseCaustomHook";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const TeamRegistration = () => {
  const handclickopenEvent = UseCaustomHook();
  const navigate = useNavigate();
  const [teamdata, setTeamData] = useState([]);
  const [team, setTeam] = useState({
    teamName: "",
    captainName: "",
    coachName: "",
    emailId: "",
    date: "",
    contactnumber: "",
    teamplayers: [],
  });

  const handclickTeam = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const [count, setCount] = useState(1);

  const [teamMembers, setTeamMembers] = useState([
    { playerName: "", proficiency: "", address: "" },
  ]);

  const handClickChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...teamMembers];
    list[index][name] = value;
    setTeamMembers(list);
  };

  const handleAddClick = () => {
    setTeamMembers([
      ...teamMembers,
      { playerName: "", proficiency: "", address: "" },
    ]);
    setCount((pre) => {
      return pre + 1;
    });
  };

  const handleRemoveClick = (index) => {
    const list = [...teamMembers];
    list.splice(index, 1);
    setTeamMembers(list);
    setCount((pre) => {
      return pre - 1;
    });
  };

  useEffect(() => {
    const fetechUserData = async () => {
      try {
        await axios
          .get("http://localhost:8082/dsafetech/reg/user")
          .then((res) => setTeamData(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetechUserData();
  }, []);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (team.teamName.trim().length < 3) {
      newErrors.teamName = "Team Name must be at least 3 characters";
    }

    if (team.captainName.trim().length < 3) {
      newErrors.captainName = "Captain Name must be at least 3 characters";
    }

    if (team.coachName.trim().length < 3) {
      newErrors.coachName = "Coach Name must be at least 3 characters";
    }

    if (!team.emailId.trim()) {
      newErrors.emailId = "Email Id is required";
    } else if (!/\S+@\S+\.\S+/.test(team.emailId)) {
      newErrors.emailId = "Email Id is not valid";
    }

    if (!team.date) {
      newErrors.date = "Date is required";
    }

    if (!team.contactnumber) {
      newErrors.contactnumber = "Contact Number is required";
    } else if (!/^\+?\d{10,}$/i.test(team.contactnumber)) {
      newErrors.contactnumber = "Contact Number is not valid";
    }

    // Validate teamMembers
    teamMembers.forEach((member, index) => {
      if (member.playerName.trim().length < 3) {
        newErrors[`playerName${index}`] =
          "Player Name must be at least 3 characters";
      }

      if (member.proficiency.trim().length < 3) {
        newErrors[`proficiency${index}`] =
          "Proficiency must be at least 3 characters";
      }

      if (member.address.trim().length < 5) {
        newErrors[`address${index}`] = "Address must be at least 5 characters";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const post = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    const emailIdExists = teamdata.some(
      (teams) => teams.gmailId === team.emailId
    );
    const contactNumberExists = teamdata.some(
      (teams) => teams.mobileNumber === parseInt(team.contactnumber)
    );
    console.log(emailIdExists);
    console.log(contactNumberExists);
    if (!emailIdExists) {
      toast.error("Please enter your Registration EmailId", {
        position: "top-center",
      });
      return;
    }

    if (!contactNumberExists) {
      toast.error("Please enter your Registration ContactNumber", {
        position: "top-center",
      });
      return;
    }

    if (isFormValid) {
      const playersArray = team.teamplayers || [];
      playersArray.push(...teamMembers);

      setTeam({ ...team, teamplayers: playersArray });

      try {
        await axios.post("http://localhost:8082/dsafetech/reg/match", team, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        toast.success("Team registration successful!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } catch (error) {
        toast.error("An error occurred while submitting the form", {
          position: "top-center",
        });
        console.log(error);
      }
    }
  };

  const cancel = () => {
    handclickopenEvent();
    navigate("/event");
  };

  const renderErrorMessage = (name) => {
    return errors[name] ? <p className="text-red-500">{errors[name]}</p> : null;
  };

  return (
    <>
      <div className="bg-blue-300 h-screen overflow-y-scroll">
        <div className="mx-auto w-3/4">
          <h1 className="text-center py-5 font-semibold text-3xl">
            Cricket Team
          </h1>
          <form>
            {/* Team Name */}
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  Team Name*
                </label>

                <input
                  className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                    errors.teamName ? "border-red-500" : ""
                  }`}
                  name="teamName"
                  type="text"
                  value={team.teamName}
                  placeholder="Team name"
                  onChange={handclickTeam}
                  required={true}
                />
                {renderErrorMessage("teamName")}
              </div>
              {/* Coach Name */}
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Coach Name*
                </label>

                <input
                  className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 ${
                    errors.coachName ? "border-red-500" : ""
                  }`}
                  id="title"
                  name="coachName"
                  type="text"
                  value={team.coachName}
                  placeholder="Coach name"
                  onChange={handclickTeam}
                  required={true}
                />
                {renderErrorMessage("coachName")}
              </div>
            </div>
            {/* Captain Name */}
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  Captain Name*
                </label>

                <input
                  className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                    errors.captainName ? "border-red-500" : ""
                  }`}
                  id="company"
                  name="captainName"
                  value={team.captainName}
                  type="text"
                  placeholder="captain name"
                  onChange={handclickTeam}
                  required={true}
                />
                {renderErrorMessage("captainName")}
              </div>
              {/* Email Id */}
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Email Id*
                </label>

                <input
                  className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 ${
                    errors.emailId ? "border-red-500" : ""
                  }`}
                  id=""
                  name="emailId"
                  type="text"
                  value={team.emailId}
                  placeholder="abc@gmail.com"
                  onChange={handclickTeam}
                  required={true}
                />
                {renderErrorMessage("emailId")}
              </div>
            </div>
            {/* Contact Number and Date */}
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  CONTACT NO*
                </label>

                <input
                  className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                    errors.contactnumber ? "border-red-500" : ""
                  }`}
                  name="contactnumber"
                  type="number"
                  placeholder="+91...."
                  value={team.contactnumber}
                  onChange={handclickTeam}
                />
                {renderErrorMessage("contactnumber")}
              </div>
              <div className="md:w-1/2 px-3 mb-5 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  DATE*
                </label>

                <input
                  type="date"
                  className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                    errors.date ? "border-red-500" : ""
                  }`}
                  placeholder="Date"
                  name="date"
                  value={team.date}
                  onChange={handclickTeam}
                  required={true}
                />
                {renderErrorMessage("date")}
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Player Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Proficiency
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Add Player
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((Team, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <input
                              placeholder="Enter player's name"
                              type="text"
                              name="playerName"
                              value={Team.playerName}
                              onChange={(e) => handClickChange(e, index)}
                              className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                                errors[`playerName${index}`]
                                  ? "border-red-500"
                                  : ""
                              }`}
                              required={true}
                            />
                            {renderErrorMessage(`playerName${index}`)}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <input
                              placeholder="Enter player's proficiency"
                              type="text"
                              name="proficiency"
                              value={Team.proficiency}
                              onChange={(e) => handClickChange(e, index)}
                              className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                                errors[`proficiency${index}`]
                                  ? "border-red-500"
                                  : ""
                              }`}
                              required={true}
                            />
                            {renderErrorMessage(`proficiency${index}`)}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <input
                              placeholder="Enter player's address"
                              type="text"
                              name="address"
                              value={Team.address}
                              onChange={(e) => handClickChange(e, index)}
                              className={`w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-3 mb-2 ${
                                errors[`address${index}`]
                                  ? "border-red-500"
                                  : ""
                              }`}
                              required={true}
                            />
                            {renderErrorMessage(`address${index}`)}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button onClick={handleAddClick}>Add Player</button>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button onClick={() => handleRemoveClick(index)}>
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center flex p-2 gap-5 items-center justify-center mb-5">
          <button
            onClick={cancel}
            className="mt-10 text-center shadow-lg border px-5 py-3 bg-slate-200 hover:bg-slate-400"
          >
            Cancel
          </button>
          {count > 2 && (
            <button
              onClick={post}
              className="mt-10 text-center shadow-lg border px-5 py-3 bg-slate-200 hover:bg-slate-400"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TeamRegistration;
