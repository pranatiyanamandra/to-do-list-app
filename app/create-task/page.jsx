"use client";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { useState } from "react";
const CreateTask = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    tomatoesSpent: 0,
    priority: 0,
    status: 'Created',
  });

  const createTask = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(task)

    // try {
    //   const response = await fetch("/api/prompt/new", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       prompt: task.prompt,
    //       userId: session?.user.id,
    //       tag: task.tag,
    //     }),
    //   });

    //   if (response.ok) {
    //     router.push("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <Form
      type='Create'
      task={task}
      setTask={setTask}
      submitting={submitting}
      handleSubmit={createTask}
    />
  );
};

export default CreateTask;
