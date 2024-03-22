import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";

const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs

  // intial set of jobs is an empty array
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* 
    
    const fetchJobs = () => {
      fetch("http://localhost:8000/jobs")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setJobs(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false)
      })
      
    }
    */

    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "/api/jobs?_limit=3"
        : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
