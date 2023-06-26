import React, { useContext } from "react";
import { SettingContext } from "./Provider";
import Countdown from "./Countdown";
const TaskTabs = () => {
    const { pomodoro, setCurrentTimer, startTimer,pauseTimer, settingButton, executing, startAnimate, countdownChildren } = useContext(SettingContext);

    const [openTab, setOpenTab] = React.useState(1);
    return (

        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-orange-500"
                                        : "text-orange-500 bg-white")
                                }
                                onClick={e => {
                                    setCurrentTimer('Work')
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                role="tablist"
                            >
                                Work
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-orange-500"
                                        : "text-orange-500 bg-white")
                                }
                                onClick={e => {
                                    setCurrentTimer('Short Break')
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                role="tablist"
                            >
                                Short Break
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-orange-500"
                                        : "text-orange-500 bg-white")
                                }
                                onClick={e => {
                                    setCurrentTimer('Long Break')
                                    setOpenTab(2);
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                role="tablist"
                            >
                                Long Break
                            </a>
                        </li>
                    </ul>

                </div>
            </div >
            <Countdown key={pomodoro} timer={pomodoro} animate={startAnimate}>
                {countdownChildren}
            </Countdown>
            <div className="mt-5 -mb-px mr-2 flex last:mr-0 flex-auto text-center">
                <button
                    className="text-xs mr-2 font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal text-orange-500 bg-white"
                    onClick={startTimer}
                >
                    Start
                </button>
                <button
                    className="text-xs font-bold mr-2 uppercase px-5 py-3 shadow-lg rounded-full block leading-normal text-orange-500 bg-white"
                    onClick={pauseTimer}
                >
                    Pause
                </button>
            </div >
            {/* <div className="mt-5 -mb-px mr-2 last:mr-0 items-center justify-center flex-auto text-center">
                <button
                    className="text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal text-orange-500 bg-white"
                    onClick={settingButton}
                >
                    Reset Time Durations
                </button>
            </div > */}
        </>
    );
};

export default TaskTabs;