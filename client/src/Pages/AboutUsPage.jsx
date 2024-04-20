import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AboutUsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000");
        console.log(response.data.data);
        setJobs(response.data.data); // Assuming jobs are directly under 'jobs' key in the response
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full py-10">
      <h3 className="text-4xl font-bold mt-5 pl-32">About JobNext</h3>
      <p className="to-gray-600 px-32 mt-5">{/* Your static content */}</p>

      {/* Render your fetched jobs here */}
      <div className="flex flex-col items-center gap-y-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="max-w-2xl p-6 bg-white shadow-lg rounded-lg"
          >
            <h4 className="text-xl font-bold">{job.slug}</h4>
            <p className="text-gray-600">Company: {job.company_name}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">
              Employment Type: {job.employmentType}
            </p>
            <p className="text-gray-600">Date Posted: {job.datePosted}</p>
            <p className="text-gray-600">Salary Range: {job.salaryRange}</p>
            <p className="text-gray-600">Description: {job.description}</p>
            <a
              href={job.jobProviders[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
