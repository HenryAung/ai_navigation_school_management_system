import Link from 'next/link';

const EmployeeList = ({ employee }) => {
  return (
    <>
      
    
       
        <div className="flex-1 p-4">
          <div className="container mx-auto my-10 px-10 py-10">
            <h1 className="text-3xl font-bold mb-6">Employee Lists</h1>

            <div className="text-right m-6">
            <Link href="/add-employee" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  Add new employee</Link>
            </div>

            {/* Search bar */}
            <div className="mb-4">
              <form id="searchForm" action="/employee/employee_list" method="POST">
           
                <label htmlFor="search" className="sr-only">
                  Search:
                </label>
                <input
                  type="search"
                  id="search"
                  name="text"
                  placeholder="Search "
                  className="border border-gray-300 px-2 py-1 rounded-md"
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
                  Search
                </button>
              </form>
            </div>


            {/* employee list table */}
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">No.</th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">Name</th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">Gender</th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">Address</th>
                </tr>
              </thead>
              <tbody>
        
                  <tr key=''>
                    <td className="border px-4 py-2 border-gray-400">1</td>
                    <td className="border px-4 py-2 border-gray-400"> 
                    <Link href="/employee-profile/3" className="text-blue-500 font italic underline hover:text-blue-900 cursor-pointer">  Henry</Link>
                    </td>
                    <td className="border px-4 py-2 border-gray-400">Male</td>
                    <td className="border px-4 py-2 border-gray-400">address</td>
                  </tr>
        
              </tbody>
            </table>
          </div>
        </div>

    
    </>
  );
};

export default EmployeeList;
