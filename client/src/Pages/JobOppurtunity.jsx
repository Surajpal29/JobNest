import React from "react";
import useId from "@mui/material/utils/useId";

const JobOppurtunity = () => {
  const id = useId();

  const cardData = [
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },

    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
    {
      id: id,
      companyLogo: "logo",
      companyName: "CompanyName",
      JobTitle: "Product Designer",
      skillsRequired: ["Adobe xd", "Figma", "Canva"],
      postedDate: "posted on 20/4/24",
      PaymentInRupees: 5000,
    },
  ];

  return (
    <div className="w-full px-4 py-2">
      <h3 className="font-bold text-xl mb-3 px-10">
        ~Latest Job Opportunities
      </h3>
      <hr className="text-gray-400 mx-10" />
      {/* card */}

      <div className="w-full flex flex-wrap justify-center gap-4">
        {cardData.map((data) => (
          <div
            key={data.id}
            className="w-full max-w-[300px] border rounded-lg shadow-xl px-3 py-4 mt-4 hover:scale-105 transition ease-in-out duration-300"
          >
            <div className="flex justify-around items-center">
              <span className="w-12 h-12 bg-green-300 rounded-full"></span>
              <h5 className="font-semibold">{data.companyName}</h5>
            </div>
            <div className="mt-2">
              <h6 className="text-lg">{data.JobTitle}</h6>
            </div>
            <div className="mt-5">
              <ol className="flex gap-2 flex-wrap">
                {data.skillsRequired.map((skill, index) => (
                  <li key={index} className="bg-gray-300 py-1 px-2 rounded-2xl">
                    {skill}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex items-center justify-between gap-3 mt-4">
              <hr className="w-8 h-[1px] text-gray-400" />
              <p>{data.postedDate}</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <h6>RS {data.PaymentInRupees}</h6>
              <button className="py-1 px-3 rounded-3xl bg-blue-400 flex items-center justify-center">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOppurtunity;
