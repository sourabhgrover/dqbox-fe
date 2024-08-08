import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NoResultFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white shadow-lg rounded-lg">
      <MagnifyingGlassIcon className="w-20 h-20 text-gray-400" />
      <h2 className="mt-4 text-3xl font-bold text-gray-700">No Results Found</h2>
      <p className="mt-2 text-gray-500 text-center">
        We couldn't find anything matching your search. Try adjusting your search criteria or start a new search.
      </p>
      {/* <button
        onClick={onRetry}
        className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Start New Search
      </button> */}
    </div>
  )
}

export default NoResultFound