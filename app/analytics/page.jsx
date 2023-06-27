'use client'
import React from 'react'
import '@styles/globals.css';
import TaskChart from '@components/TaskChart';
const page = () => {
    return (<>
        <section className="bg-center bg-no-repeat analytics-bg  bg-gray-500 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at To-Do app we focus on your performance, and ensure that the Pomodoro Technique can drive your growth.</p>
            </div>
        </section>
        <div className='flex flex-col lg:flex-row'>
            <div>
                <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-8 lg:px-10">
                    <p className="text-lg font-normal text-orange-600 lg:text-xl sm:px-16 lg:px-48">TODAY</p>
                    <div class="sm:flex sm:space-x-4">
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 sm:my-8">
                            <div class="bg-white p-5">
                                <div class="sm:flex sm:items-start">
                                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 class="text-sm leading-6 font-medium text-gray-400">Tomato</h3>
                                        <p class="text-3xl font-bold text-black">71,897</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 sm:my-8">
                            <div class="bg-white p-5">
                                <div class="sm:flex sm:items-start">
                                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 class="text-sm leading-6 font-medium text-gray-400">Focus Time</h3>
                                        <p class="text-3xl font-bold text-black">58.16%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-8 lg:px-10">
                    <p className="text-lg font-normal text-orange-600 lg:text-xl sm:px-16 lg:px-48">THIS WEEK</p>
                    <div class="sm:flex sm:space-x-4">
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 sm:my-8">
                            <div class="bg-white p-5">
                                <div class="sm:flex sm:items-start">
                                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 class="text-sm leading-6 font-medium text-gray-400">Tomato</h3>
                                        <p class="text-3xl font-bold text-black">71,897</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 sm:my-8">
                            <div class="bg-white p-5">
                                <div class="sm:flex sm:items-start">
                                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 class="text-sm leading-6 font-medium text-gray-400">Focus Time</h3>
                                        <p class="text-3xl font-bold text-black">58.16%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-auto'>
                <TaskChart></TaskChart>

            </div>
        </div>

    </>
    )
}

export default page
