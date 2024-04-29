import StudentDropdown from "./side_menu_componants/StudentDropdown"
import SchoolDropdown from './side_menu_componants/SchoolDropdown'
import  EmployeeDropdown  from "./side_menu_componants/EmployeeDropdown"
import AcademicDropdown from "./side_menu_componants/AcademicDropdown";


import Link from 'next/link';

const SideMenu = () => { 
    return (
        // Side Menu Bar 
        <aside className="relative top-0 left-0 bg-gray-800 text-white w-1/5 min-h-screen">
            <ul className="pb-4 ">
                <li className=" py-2 px-10 mt-2  hover:bg-gray-700  "><SchoolDropdown /></li>
                <li className=" py-2 px-10 mt-2  hover:bg-gray-700  "><StudentDropdown /></li>
                <li className=" py-2 px-10 mt-2  hover:bg-gray-700  "><EmployeeDropdown /></li>
                <li className=" py-2 px-10 mt-2  hover:bg-gray-700  "><AcademicDropdown /></li>
                <li className=" py-2 px-10 mt-2  hover:bg-gray-700  ">
                <Link href="/predict" className="text-white-400 hover:bg-gray-800 rounded-md">Predict Performance
                </Link>
                </li>
                

            </ul>
        </aside>
    )
}

export default SideMenu;
