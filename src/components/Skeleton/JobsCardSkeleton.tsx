const JobCardSkeleton = () => {
  return (
    <div className=" max-w-7xl " >

      <div className="border rounded-xl p-5 shadow-md animate-pulse space-y-4">
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>

        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        <div className="h-5 bg-gray-300 rounded w-1/2"></div>

        <div className="h-10 bg-gray-300 rounded w-2/3 mt-4"></div>
      </div>



    </div>

  );
};

export default JobCardSkeleton;
