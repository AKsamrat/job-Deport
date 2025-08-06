import { Zoom } from 'react-awesome-reveal';
import { FcViewDetails } from 'react-icons/fc';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import type { Job } from '../../Types';

const JobCard = ({ job }: { job: Job }) => {
  const { id, jobTitle, companyName, salary, jobType } = job;

  return (
    <Zoom duration={1000}>
      <div className="h-full">
        <div className="border border-[#00C2CB] rounded-xl p-5 shadow-xl transition-transform hover:translate-y-[-5px] hover:shadow-2xl duration-200 bg-white">
          {/* Job Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{jobTitle}</h2>

          {/* Company */}
          <p className="text-gray-600 mb-4">Company: <span className="font-medium text-gray-700">{companyName}</span></p>

          {/* Job Info Row */}
          <div className="flex justify-between items-center border-b pb-3 mb-3 text-sm text-gray-600">
            <p className="flex items-center gap-2 bg-[#E0F7FA] text-[#007E85] px-2 py-1 rounded-full font-normal">
              <IoBriefcaseOutline /> {jobType}
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineWatchLater className="text-[#00C2CB]" />
              <span>Deadline: <span className="font-semibold"> Soon</span></span>
            </p>
          </div>

          {/* Salary */}
          <p className="text-md font-medium text-gray-700 mb-2">
            Salary:
            <span className="text-orange-600 font-semibold ml-2">{salary}</span>
          </p>

          {/* Applicant Count */}
          <div className="flex items-center gap-2 mb-3 text-gray-700">
            <FaUserTie className="text-[#00C2CB]" />
            <span className="text-sm">Applicants: <span className="font-semibold">4</span></span>
          </div>

          {/* Details Button */}
          <div className="flex justify-end mt-4">
            <Link to={`/jobDetails/${id}`}>
              <button className="flex items-center gap-2 bg-[#00C2CB] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#00b3bb] transition">
                <FcViewDetails className="text-lg" />
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default JobCard;
