"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskCard from "./TaskCard";
const TaskCardList = ({ data, handleTagClick, handleDelete, handleEdit, handleView }) => {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {data.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleView={handleView}
                    handleTagClick={handleTagClick}
                />
            ))}
        </ul>
    );
};
const mockData = [
    {
        title: 'Clean Toilet',
        description: 'disinfect and clean the toilet with Dettol and Harpic',
        dueDate: '24-06-2023',
        tomatoesSpent: 0,
        priority: 7,
        status: 'Started',
    },
    {
        title: 'Clean Toilet',
        description: 'disinfect and clean the toilet with Dettol and Harpic',
        dueDate: '24-06-2023',
        tomatoesSpent: 0,
        priority: 7,
        status: 'Paused',
    }
    ,
    {
        title: 'To-do list app',
        description: 'Develop Pomodoro based to-do list app',
        dueDate: '27-06-2023',
        tomatoesSpent: 0,
        priority: 9,
        status: 'Created',
    },
    {
        title: 'Vendor App',
        description: 'Develop Vendor App',
        dueDate: '23-06-2023',
        tomatoesSpent: 8,
        priority: 9,
        status: 'Completed',
    }
]
const Feed = () => {
    const [allTasks, setAllTasks] = useState(mockData);


    const fetchTasks = async () => {
        // const response = await fetch("/api/prompt");
        // const data = await response.json();

        // setAllTasks(data);
    };

    // const { data: session } = useSession();
    const router = useRouter();

    const handleEdit = (task) => {
        router.push(`/update-task?id=${task._id}`)
    }
    const handleView = (task) => {
        router.push(`/view-task?id=${task._id}`)
    }
    const handleDelete = async (task) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
        if (hasConfirmed) {
            try {
                await fetch(`/api/task/${task._id.toString()}`,
                    {
                        method: 'DELETE',
                    })

                const filteredTasks = allTasks.filter((t) => t._id !== task._id);
                setPosts(filteredTasks)
            } catch (error) {
                console.log(error)
            }
        }
    }


    // useEffect(() => {
    //     if (session?.user.id) {
    //         console.log("called")
    //         fetchTasks()
    //     };
    // }, [session?.user.id]);



    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const filterPrompts = (searchtext) => {
        // const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        // return allPosts.filter(
        //   (item) =>
        //     regex.test(item.creator.username) ||
        //     regex.test(item.tag) ||
        //     regex.test(item.prompt)
        // );
    };

    const handleSearchChange = (e) => {
        // clearTimeout(searchTimeout);
        // setSearchText(e.target.value);

        // // debounce method
        // setSearchTimeout(
        //   setTimeout(() => {
        //     const searchResult = filterPrompts(e.target.value);
        //     setSearchedResults(searchResult);
        //   }, 500)
        // );
    };

    const handleTagClick = (tagName) => {
        // setSearchText(tagName);

        // const searchResult = filterPrompts(tagName);
        // setSearchedResults(searchResult);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a task'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />
            </form>

            {/* All Prompts */}
            {searchText ? (
                <TaskCardList
                    data={searchedResults}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleView={handleView}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <TaskCardList
                    data={allTasks}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleTagClick={handleTagClick}
                    handleView={handleView} />
            )}
        </section>
    );
};

export default Feed;
