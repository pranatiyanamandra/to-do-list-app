'use client'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import TaskStats from '@components/TaskStats';
import TaskTabs from '@components/TaskTabs';
import TaskDetails from '@components/TaskDetails';
import SetPomodoro from '@components/SetPomodoro';
import Countdown from '@components/Countdown';
import { SettingContext } from '@components/Provider';
const page = () => {
    const searchParams = useSearchParams();
    const taskId = searchParams.get("id");

    // const [task, setTask] = useState({
    //     title: '',
    //     description: '',
    //     dueDate: '',
    //     tomatoesSpent: 0,
    //     priority: 0,
    //     status: '',
    // });
    const [task, setTask] = useState({
        title: 'Pomodoro App',
        description: 'Develop Pomodoro based Web App',
        dueDate: '22-06-2023',
        tomatoesSpent: 15,
        priority: 8,
        status: 'Created',
    });

    const { pomodoro } = useContext(SettingContext)

    useEffect(() => {
        const getTaskDetails = async () => {
            const response = await fetch(`/api/task/${taskId}`);
            const data = await response.json();

            setTask({
                title: data.title,
                description: data.description,
                dueDate: data.dueDate,
                tomatoesSpent: data.tomatoesSpent,
                priority: data.priority,
                status: data.status,
            });
        };

        if (taskId) getTaskDetails();
    }, [taskId]);

    return (<>

        <TaskDetails
            task={task}
        ></TaskDetails>

        <TaskTabs></TaskTabs>



    </>

    )
}

export default page