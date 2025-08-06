import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { Job } from '../../Types';
import JobDetailsCard from '../../components/Home/JobDetailsCard';

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const selectedJob = jobs.find(job => job.id === id);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!selectedJob) return <p className="text-center mt-10">Job not found.</p>;

  return <JobDetailsCard job={selectedJob} />;
};

export default JobDetailsPage;
