import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import userImg from "../assets/loginPageImage.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import XIcon from "@mui/icons-material/X";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const UserProfilePage = () => {
  const skillData = ["web Developer", "html", "CSS", "React", "Next.js"];
  const profileFeatureLinks = [
    "Skills",
    "Projects",
    "Experiences",
    "Resume",
    "Edit Information",
  ];
  const [profileFeatureLinksElement, setprofileFeatureLinksElement] = useState(
    profileFeatureLinks[0]
  );
  return (
    <>
      <div className="w-full bg-green-400  pl-20 ">
        <div className="w-[94%]  py-10 flex">
          <NavLink to="/find-a-job">
            <KeyboardBackspaceIcon />
          </NavLink>
          {/* left porfile image div */}
          <div className="w-[30vw]   flex flex-col items-center">
            <div className="w-[15rem] h-[15rem] bg-yellow-300 rounded-full flex items-center justify-center">
              <img src={userImg} alt="this is user umage" />
            </div>
            <div className="w-56 h-10 flex items-center justify-center bg-blue-400 rounded-full my-[-2rem] mb-[2rem]">
              Looking for work
            </div>
            <div>
              <LocationOnOutlinedIcon />
              <span>Bhilai, C.G</span>
            </div>
          </div>
          {/* /profile right top div */}
          <div className="w-[70%]  h-30 flex flex-col gap-y-3 items-start justify-center">
            <h1 className="font-bold text-4xl">
              user name{" "}
              <sup>
                <VerifiedOutlinedIcon />
              </sup>
            </h1>
            <div className="flex gap-3">
              <span className="w-10 h-10 rounded-full flex items-center justify-center border-2">
                <XIcon />
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center border-2">
                <XIcon />
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center border-2">
                <XIcon />
              </span>
              <button className="w-fit h-fit px-3 py-1 border rounded-2xl">
                {" "}
                <MessageIcon /> Message
              </button>
              <button className="w-fit h-fit px-3 py-1 border rounded-2xl">
                <ShareIcon /> Share
              </button>
            </div>
            <div className="flex gap-5">
              <div>
                <h6 className="text-sm">Role</h6>
                <h5 className="text-lg font-semibold">Designer</h5>
              </div>
              <div>
                <h6 className="text-sm">Experience</h6>
                <h5 className="text-lg font-semibold">10 Year</h5>
              </div>
            </div>
            <h5 className="">My Skills</h5>
            <div className="w-[60vw] flex gap-3">
              {skillData.map((skill, index) => (
                <span
                  key={index}
                  className="w-fit h-fit px-3 py-1  border rounded-2xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* center div which shows the list of features which we have to show in the profile page */}
      <div className=" w-full bg-cyan-400 flex items-center justify-center text-xl py-5">
        <ul className="flex gap-4">
          {profileFeatureLinks.map((feature, index) => (
            <li
              key={index}
              onClick={() => setprofileFeatureLinksElement(feature)}
              className="cursor-pointer"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full bg-red-400 ">
        <div className="w-[30vw] p-[5vw] bg-green-400">
          <h3 className="text-3xl">{profileFeatureLinksElement}</h3>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
