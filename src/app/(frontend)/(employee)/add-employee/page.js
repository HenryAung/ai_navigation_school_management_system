import Link from 'next/link'

const AddStudent = ({ message }) => {
  return (
    <>


        {/* Form for adding new student */}
            

        <div class="container mx-auto px-4 py-8">

        <h2 className="text-4xl text-center text-indigo-900 font-bold mb-4">Add new employee</h2>

        <div className="text-right my-6">
            <Link href="/employee-list" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  View Employees </Link>
        </div>

        <form class="w-full p-10">

          {/* Personal Detail Section */}
          
          <div class="uppercase tracking-wide text-xl text-indigo-900 font-bold mb-4">Personal Detail</div>

           <div class="flex flex-wrap -mx-3 mb-6">

             {/* Student Name  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="student_name" class="block text-sm font-medium text-gray-700">Teacher Name</label>
                <input type="text" name="student_name" id="student_name" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

             {/* Gender  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
                <select id="gender" name="gender" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>

             {/* Date of Birth  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" name="dob" id="dob" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* POB  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="place_of_birth" class="block text-sm font-medium text-gray-700">Place of Birth</label>
                <input type="text" name="place_of_birth" id="place_of_birth" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

        
             {/* Address  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" id="address" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

             {/* Phone  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" id="phone" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

             {/* Email Address  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

             {/* education */}
              <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="education" class="block text-sm font-medium text-gray-700">Education </label>
                  <textarea id="education" name="education" rows="3" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
              </div>

  
          </div>

          {/* Joining Detail Section  */}

          <div class="uppercase tracking-wide text-xl text-indigo-900 font-bold mt-6 mb-4">Joining Detail</div>

          <div class="flex flex-wrap -mx-3 mb-6">
         

            {/* Admission Date  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="admission_date" class="block text-sm font-medium text-gray-700">Joining Date</label>
              <input type="date" name="admission_date" id="admission_date" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* Role  */}
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
              <select id="role" name="role" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="admin">Admin</option>
                <option value="moderator">Teacher</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* <div class="w-full md:w-1/2 px-3 mb-6">
              <input type="submit" value="Submit" id="submitBtn" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div> */}

            {/* Salary */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="section" class="block text-sm font-medium text-gray-700">Salary</label>
              <input type="number" name="section" id="section" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* Designation */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="designation" class="block text-sm font-medium text-gray-700">Designation</label>
              <input type="text" name="designation" id="designation" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

                {/* Description/ Note  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="extra_note" class="block text-sm font-medium text-gray-700">Description / Note</label>
                <textarea id="extra_note" name="extra_note" rows="3" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>


          </div>

      

             {/* Class Teacher Section  */}
             <div class="uppercase tracking-wide  text-xl text-indigo-900 font-bold mt-6 mb-4">Class Teacher</div>
             <div class="flex flex-wrap -mx-3 mb-6">
             

               {/* Class */}
              <div class="w-full md:w-1/2 px-3 mb-6">
                <label for="class" class="block text-sm font-medium text-gray-700">Class</label>
                <select id="class" name="class" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Choose Class</option>
                  <option value="year 1">Year 1</option>
                  <option value="year 2">Year 2</option>
                  <option value="year 3">Year 3</option>
                </select>
              </div>

                {/* section  */}
              <div class="w-full md:w-1/2 px-3 mb-6">
                <label for="section" class="block text-sm font-medium text-gray-700">Section</label>
                <select id="section" name="section" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="">Choose section</option>
                  <option value="section A">Section A</option>
                  <option value="section B">Section B</option>
                  <option value="Section C">Section C</option>
                </select>
              </div>
              </div>
            

             {/* Login Detail Section  */} 
             
             <div class="uppercase tracking-wide  text-xl text-indigo-900 font-bold mt-6 mb-4">Login Detail</div>
             <div class="flex flex-wrap -mx-3 mb-6">
            
                {/* User Name  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="username" class="block text-sm font-medium text-gray-700">User Name</label>
                  <input type="text" name="username" id="username" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Email  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="email_login" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email_login" id="email_login" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Password  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" id="password" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="mt-6">
                  <button type="submit" class="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Save</button>
                </div>

             </div>
          

        </form>

    </div>





    </>
  );
};

export default AddStudent;
