import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from 'react-icons/fa';
import type { Job } from '../../Types';

const JobDetailsCard = ({ job }: { job: Job }) => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Header */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">{job.jobTitle}</h2>
        <p className="text-gray-600 mt-1">{job.companyName}</p>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-gray-700">
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-[#00C2CB]" />
          <span className="font-medium">{job.jobType}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaDollarSign className="text-[#00C2CB]" />
          <span className="font-medium">{job.salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#00C2CB]" />
          <span className="font-medium">{job.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h3>
        <p className="text-gray-600 leading-relaxed">{job.description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h3>
        <p className="text-gray-600">{job.requirement}</p>
      </div>

      {/* Apply Button */}
      <div className="text-right">
        <button className="bg-[#00C2CB] hover:bg-[#00b3b3] text-white font-semibold py-2 px-6 rounded transition duration-200">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetailsCard;
