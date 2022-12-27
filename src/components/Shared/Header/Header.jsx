import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../../Theme/Toggle";

const Header = () => {
  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <Link to='/'
          className='text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'
        >
          Home
        </Link>

        <Link to='add-a-task'
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          Add A Task
        </Link>

        <Link to='my-tasks'
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          My Tasks
        </Link>

        <Link to='completed-task'
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          Completed
        </Link>

        <Toggle></Toggle>
      </div>
    </nav>
  );
};

export default Header;
