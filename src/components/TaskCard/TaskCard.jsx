import React from "react";


const TaskCard = ({ task }) => {
  console.log(task);
  // const navigate = useNavigate();

  //deleting a task
  // const handelDeleteTask = task => {
    
  //   fetch(`http://localhost:5000/my-task/${task?._id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(task),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       toast.success(`item deleted.`);
  //       navigate(`/`);
  //     });
  // }
  return (
    <div>
      <div className='max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <div className='px-4 py-2'>
          <h1 className='text-3xl font-bold text-gray-800 uppercase dark:text-white'>
            {task?.name}
          </h1>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
            {task?.description}
          </p>
        </div>

        <img
          className='object-cover w-full h-48 mt-2'
          src={task?.image}
          alt={task?.name}
        />

        <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
          <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Update
          </button>
          <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Delete
          </button>
          <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
