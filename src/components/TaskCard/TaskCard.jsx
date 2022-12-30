import React from "react";

const TaskCard = ({task}) => {
    console.log(task);
    
  return (
    <div>
      <div class='max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <div class='px-4 py-2'>
          <h1 class='text-3xl font-bold text-gray-800 uppercase dark:text-white'>
            {task?.name}
          </h1>
          <p class='mt-1 text-sm text-gray-600 dark:text-gray-400'>
            {task?.description}
          </p>
        </div>

        <img
          class='object-cover w-full h-48 mt-2'
          src={task?.image}
          alt={task?.name}
        />

        <div class='flex items-center justify-between px-4 py-2 bg-gray-900'>
          <h1 class='text-lg font-bold text-white'>$129</h1>
          <button class='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;