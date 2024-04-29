import Image from "next/image";
import Footer from "./(frontend)/components/footer"
import SideMenu from "./(frontend)/components/sidemenu"
import Navbar from './(frontend)/components/navbar'

export default function Home() {
  return (
    <div className="flex">

        {/* Main Content */}
    <div className="flex-1 p-4">
        <header className="text-center py-16 mb-12 bg-white">
            <h1 className="font-bold text-4xl text-gray-800 mb-3">Welcome to Our School Management System</h1>
            <p className="text-gray-600">Managing school activities efficiently and effectively</p>
        </header>
    
        <div className="container mx-auto px-6 md:px-12 bg-gray">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800">Our Features</h2>
                <p className="text-gray-600">Explore the features of our management system</p>
            </div>
            <div className="flex flex-wrap -mx-4">
                {/*  Feature 1 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Student Management</h3>
                        <p className="text-gray-600">Manage student data, attendance, and grades easily.</p>
                    </div>
                </div>
                {/*  Feature 2 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Teacher Management</h3>
                        <p className="text-gray-600">Keep track of teacher schedules and workload.</p>
                    </div>
                </div>
                {/*  Feature 3 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Administration Tools</h3>
                        <p className="text-gray-600">Effective tools for running school operations.</p>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</div>

  );
}
