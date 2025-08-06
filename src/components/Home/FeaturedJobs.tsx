import { useEffect, useState } from 'react';
import type { Job } from '../../Types';
import JobCard from './JobCard';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('/jobs.json')
      .then((res) => res.json())
      .then((data: Job[]) => {
        const topSixJobs = data.slice(0, 6);
        setJobs(topSixJobs);
      });
  }, []);

  return (
    <div className="px-4 lg:px-8">
      <h1 className="text-2xl font-bold text-center dark:text-white text-gray-800 capitalize lg:text-5xl mt-8">
        Featured Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/allJobs"
          className="btn bg-[#00C2CB] text-white px-6 py-2 rounded-lg"
        >
          View All Jobs
        </a>
      </div>
    </div>
  );
};

export default FeaturedJobs;
