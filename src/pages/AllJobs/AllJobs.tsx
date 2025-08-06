import React, { useEffect, useState } from 'react';
import JobCard from '../../components/Home/JobCard';
import type { Job } from '../../Types';

import JobCardSkeleton from '../../components/Skeleton/JobsCardSkeleton';

const AllJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  useEffect(() => {
    let updatedJobs = [...jobs];

    // Search by title or company
    if (searchTerm.trim()) {
      updatedJobs = updatedJobs.filter(job =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by job type
    if (selectedType) {
      updatedJobs = updatedJobs.filter(job => job.jobType === selectedType);
    }

    setFilteredJobs(updatedJobs);
  }, [searchTerm, selectedType, jobs]);

  return (
    <div className="px-4 lg:px-0">
      <h1 className="text-2xl font-bold text-center dark:text-white text-gray-800 capitalize lg:text-5xl mt-8">
        All Jobs
      </h1>

      {/* Search and Filter Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or company..."
          className="input input-bordered w-full lg:w-1/3 border-[#00C2CB] border-[1px] rounded-lg p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="select select-bordered w-full lg:w-1/4 border-[#00C2CB] border-[1px] rounded-lg p-2"
        >
          <option value="">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {
          filteredJobs.length > 0 ? (
            filteredJobs.map((job: Job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <JobCardSkeleton></JobCardSkeleton>
          )
        }
      </div>
    </div>
  );
};

export default AllJobs;
