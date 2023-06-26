"use client";
import { useRouter,useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
import Form from "@components/Form";
const EditTask = () => {
    const router = useRouter();
    const [submitting, setIsSubmitting] = useState(false);
    const searchParams = useSearchParams();
    const taskId = searchParams.get('id');
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        tomatoesSpent: 0,
        priority: 0,
        status: '',
    });

    useEffect(() => {

        const getTaskDetails = async () => {
            // const response = await fetch(`/api/task/${taskId}`)
            // const data = await response.json();

            // setTask({
            //     title: data.task.title,
            //     description: data.task.description,
            //     dueDate: data.task.dueDate,
            //     tomatoesSpent: data.task.tomatoesSpent,
            //     priority: data.task.priority,
            // })

        }
        if (taskId) {
            getTaskDetails();
        }

    }, [taskId])


    const updateTask = async (e) => {
        e.preventDefault();
        // setSubmitting(true);
        // if (!taskId) {
        //     return alert('Task Id not Found')
        // }
        // try {
        //     const response = await fetch(`/api/task/${taskId}`, {
        //         method: 'PATCH',
        //         body: JSON.stringify({
        //             task: task,
        //         })
        //     })
        //     if (response.ok) {
        //         router.push('/');
        //     }

        // } catch (error) {
        //     console.log(error);
        // } finally {
        //     setSubmitting(false);
        // }
    }
    return (
        <Form
            type="Edit"
            task={task}
            setTask={setTask}
            submitting={submitting}
            handleSubmit={updateTask}
        />
    )
};

export default EditTask;
