import React from 'react'
import TaskStats from './TaskStats';
const TaskDetails = ({task}) => {
    const today = new Date().toDateString();

    const convertTomatoToTime = () => {
        const minutes = task.tomatoesSpent * 25;
        const hours = Math.trunc(minutes / 60);
        const min = minutes - hours * 60;
        return {
            hours: hours,
            min: min,
        }
    }
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.500),theme(colors.orange.600))] opacity-70 w-full" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-0">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “In this game everyone needs a break to refuel, recharge, and jump back
                            in full throttle.”
                        </p>
                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Helen Edwards</cite>
                    </blockquote>
                </figure>
                <div className="flex gap-x-4">
                    <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="assets/images/icon.png" alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-lg font-semibold leading-6 text-gray-900">{task.title}</p>
                        <p className="text-lg font-semibold leading-6 text-gray-900 text-right">Today</p>
                        <p className="mt-1 truncate text-s leading-5 text-right text-black">{today}</p>
                    </div>
                </div>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">Task Description</cite>
                        <p>
                            {task.description}
                        </p>
                    </blockquote>
                    <TaskStats tomatoesSpent={task.tomatoesSpent} totalTime={convertTomatoToTime()} ></TaskStats>
                </figure>
            </div>
        </section>
  )
}

export default TaskDetails