import React, { useContext, useState } from 'react'
import { SettingContext } from './Provider'

const SetPomodoro = () => {
    const {updateExecute} = useContext(SettingContext);
    const [newTimer, setNewTimer] = useState({
        work: '',
        shortBreak: '',
        longBreak: '',
        active: 'Work',
    })

    const handleSubmit = (e) => {
        updateExecute(newTimer);

    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        switch (name) {
            case 'Work':
                setNewTimer({ ...newTimer, work: value })
                break;
            case 'Short Break':
                setNewTimer({ ...newTimer, shortBreak: value })
                break;
            case 'Long Break':
                setNewTimer({ ...newTimer, longBreak: value })
                break;
            default:
                break;
        }

    }
    return (<>
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
            <div className="sm:flex sm:space-x-4">
            Set Durations for Work, Short Break and Long Break
                <div className="inline-block align-bottom bg-white rounded-full text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    name="Work"
                                    placeholder="Set Work Time"
                                    aria-label="Work time"
                                    value={newTimer.work}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-full text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    placeholder="Set Short Break"
                                    aria-label="Short Break time"
                                    value={newTimer.shortBreak}
                                    name='Short Break'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-full text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    placeholder="Set Long Break Time"
                                    aria-label="Long Break time"
                                    value={newTimer.longBreak}
                                    name='Long Break'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <button
                className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal text-orange-500 bg-white"
                onClick={handleSubmit}
            >
                Set Timer
            </button>
        </div >
    </>
    )
}

export default SetPomodoro