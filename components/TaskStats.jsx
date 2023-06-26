import React from 'react'
import Image from 'next/image'
const TaskStats = ({tomatoesSpent,totalTime}) => {
    return (
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
            <div className="sm:flex sm:space-x-4">
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <h3 className="text-sm leading-6 font-medium text-gray-400">Tomato</h3>
                                <p className="text-3xl font-bold text-black">{tomatoesSpent}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <h3 className="text-sm leading-6 font-medium text-gray-400">Focus Time</h3>
                                <span className="text-3xl font-bold text-black">{totalTime.hours}</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"> h</span>
                                <span className="text-3xl font-bold text-black">{totalTime.min}</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"> m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskStats