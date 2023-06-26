'use client'
import React from 'react'
import Link from 'next/link'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';

const Form = ({ type, task, setTask, submitting, handleSubmit }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);


  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Task</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and manage your tasks, and let your time be properly managed with our To-Do App.
      </p>
      <img
        className="max-h-80 object-cover"
        src="/assets/images/pomodoro.png"
        alt="pomodoro"
      />
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Task Title
          </span>
          <input
            value={task.title}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value })
            }}
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
            placeholder={`Write Task Title`}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Task Description
          </span>
          <input
            value={task.description}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value })
            }}
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
            placeholder={`Write Task Description`}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Task Due Date
          </span>
          <br />
          <DatePicker className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0" selected={task.dueDate} onChange={(date) => setTask({ ...task, dueDate: date })} />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tomatoes Spent on Task
          </span>
          <input
            value={task.tomatoesSpent}
            type='number'
            onChange={(e) => {
              setTask({ ...task, tomatoesSpent: e.target.value })
            }}
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
            placeholder={`Write Task Description`}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Task Priority (out of 10)
          </span>
          <input
            value={task.priority}
            type='number'
            min='1'
            max='10'
            onChange={(e) => {
              setTask({ ...task, priority: e.target.value })
            }}
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
            placeholder={`Write Task Description`}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Task Status
          </span>
          <select
           className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
           onChange={(e)=>{setTask({...task, status:e.target.value});}}
           >
            <option value="Created">Created</option>
            <option value="Started">Started</option>
            <option value="Paused">Paused</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form