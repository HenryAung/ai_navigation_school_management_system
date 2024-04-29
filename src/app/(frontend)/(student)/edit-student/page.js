

const EditStudent = ({ message, student }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideMenu />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="container mx-auto my-10 px-10 py-10">
            <h1 className="text-xl font-bold mb-4">Edit Student</h1>

            {message && (
              <div className="bg-green-300 text-black my-10 p-4 rounded-md shadow-md">
                <p className="font-semibold">{message}</p>
              </div>
            )}

            <form action={`/student/update/${student.StudentID}`} method="post" className="grid grid-cols-2 my-10 gap-4">
              {/* First Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">First Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  name="firstname"
                  value={student.firstname}
                />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">Last Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  name="lastname"
                  value={student.lastname}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="student_email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="student_email"
                  type="email"
                  name="student_email"
                  value={student.student_email}
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  name="gender"
                  value={student.gender}
                >
                  <option value="Male" selected={student.gender === 'Male'}>Male</option>
                  <option value="Female" selected={student.gender === 'Female'}>Female</option>
                  <option value="Other" selected={student.gender === 'Other'}>Other</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_of_birth">Date of Birth</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date_of_birth"
                  type="date"
                  name="date_of_birth"
                  value={student.date_of_birth}
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  name="address"
                  value={student.address}
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">Phone Number</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone_number"
                  type="tel"
                  name="phone_number"
                  value={student.phone_number}
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
