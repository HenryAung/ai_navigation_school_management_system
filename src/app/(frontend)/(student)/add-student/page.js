// components/AddStudent.js
import Link from "next/link";

const AddStudent = ({ message }) => {
  return (
    <>


        {/* Form for adding new student */}
            

        <div class="container mx-auto px-4 py-8">

        <form class="w-full p-10">
        <h1 className="text-3xl text-center font-bold mb-6">Add New Student </h1>
        <div className="text-right m-6">
            <Link href="/student-list" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  View all students</Link>
        </div>

          {/* Personal Detail Section */}
          
          <div class="uppercase tracking-wide text-xl text-indigo-900 font-bold mb-4">Personal Detail</div>

           <div class="flex flex-wrap -mx-3 mb-6">

             {/* Student Name  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="student_name" class="block text-sm font-medium text-gray-700">Student Name</label>
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

             {/* Blood Type  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="blood_type" class="block text-sm font-medium text-gray-700">Blood Type</label>
                <input type="text" name="blood_type" id="blood_type" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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

     

             {/* ID Number  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="id_number" class="block text-sm font-medium text-gray-700">ID Number</label>
                <input type="text" name="id_number" id="id_number" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

             {/* Upload ID Proof  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="id_proof" class="block text-sm font-medium text-gray-700">Upload ID Proof</label>
                <input type="file" name="id_proof" id="id_proof" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

             {/* Extra Note  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="extra_note" class="block text-sm font-medium text-gray-700">Extra Note</label>
                <textarea id="extra_note" name="extra_note" rows="3" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>

          </div>

          {/* Admission Detail Section  */}

          <div class="uppercase tracking-wide text-xl text-indigo-900 font-bold mt-6 mb-4">Admission Detail</div>

          <div class="flex flex-wrap -mx-3 mb-6">
         

            {/* Admission Date  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="admission_date" class="block text-sm font-medium text-gray-700">Admission Date</label>
              <input type="date" name="admission_date" id="admission_date" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* Academic year  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="academic-year" class="block text-sm font-medium text-gray-700">Academic year</label>
                <select id="academic-year" name="academic-year" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>2024-2025</option>
                    <option>2023-2024</option>
                    <option>2022-2023</option>
                    <option>2021-2022</option>
                    <option>2020-2021</option>
                </select>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="campus" class="block text-sm font-medium text-gray-700">Campus</label>
                <select id="campus" name="campus" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>campus 1</option>
                    <option>campus 2</option>
                    <option>campus 3</option>
                </select>
            </div>

            {/* Class  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="class" class="block text-sm font-medium text-gray-700">Class</label>
                <select id="class" name="class" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>class 1</option>
                    <option>class 2</option>
                    <option>class 3</option>
                </select>
            </div>


            {/* Section  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="section" class="block text-sm font-medium text-gray-700">section</label>
                <select id="section" name="section" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>section 1</option>
                    <option>section 2</option>
                    <option>section 3</option>
                </select>
            </div>


            {/* Admission Number  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="admission_number" class="block text-sm font-medium text-gray-700">Admission Number</label>
              <input type="text" name="admission_number" id="admission_number" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* student Number  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="student_number" class="block text-sm font-medium text-gray-700">Student Number</label>
              <input type="text" name="student_number" id="student_number" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* Certificates  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label for="certificates" class="block text-sm font-medium text-gray-700">Additional Certificates</label>
              <input type="file" name="certificates" id="certificates" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
          </div>

      

             {/* Parent Detail Section  */}
             <div class="uppercase tracking-wide  text-xl text-indigo-900 font-bold mt-6 mb-4">Parent Detail</div>
             <div class="flex flex-wrap -mx-3 mb-6">
             

                {/* Father Name  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="father_name" class="block text-sm font-medium text-gray-700">Father Name</label>
                  <input type="text" name="father_name" id="father_name" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Father Phone  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="father_phone" class="block text-sm font-medium text-gray-700">Father Phone</label>
                  <input type="tel" name="father_phone" id="father_phone" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Father Occupation  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="father_occupation" class="block text-sm font-medium text-gray-700">Father Occupation</label>
                  <input type="text" name="father_occupation" id="father_occupation" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Mother Name  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="mother_name" class="block text-sm font-medium text-gray-700">Mother Name</label>
                  <input type="text" name="mother_name" id="mother_name" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Mother Phone  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="mother_phone" class="block text-sm font-medium text-gray-700">Mother Phone</label>
                  <input type="tel" name="mother_phone" id="mother_phone" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Mother Occupation  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="mother_occupation" class="block text-sm font-medium text-gray-700">Mother Occupation</label>
                  <input type="text" name="mother_occupation" id="mother_occupation" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                {/* Parent Email  */}
                <div class="w-full md:w-1/2 px-3 mb-6 ">
                  <label for="parent_email" class="block text-sm font-medium text-gray-700">Parent Email</label>
                  <input type="email" name="parent_email" id="parent_email" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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
