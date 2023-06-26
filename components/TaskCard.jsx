import React from 'react'

const TaskCard = ({ task, handleEdit, handleDelete, handleView }) => {

    const renderStatus = () => {
        const status = task.status;
        if (status === "Completed") {
            return <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full p-1">
                    <div className="h-1.5 w-1.5 rounded-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(34 197 94)" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        } else if (status === "Created" || status === "Paused") {
            return <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full p-1">
                    <div className="h-1.5 w-1.5 rounded-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(34 197 94)" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

        } else if (status === "Started") {
            return <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full  p-1">
                    <div className="h-1.5 w-1.5 rounded-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(249 115 22)" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
                        </svg>

                    </div>
                </div>
            </div>

        }
    }
    return (
        <li key={task.id} className="flex justify-between gap-x-6 py-5 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleView(task) }}>
            <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="assets/images/icon.png" alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{task.title}</p>
                    <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                        <p className="font-inter text-sm bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleEdit(task) }}
                        >Edit</p>
                        <p className="font-inter text-sm bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleDelete(task) }}
                        >Delete</p>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
                {renderStatus()}
            </div>
        </li>
    )
}

export default TaskCard