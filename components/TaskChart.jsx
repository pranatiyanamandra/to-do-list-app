'use client'
import React from 'react'
import BarChart from './charts/BarChart'
const TaskChart = () => {
    let curr = new Date
    let week = []

    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        let day = new Date(curr.setDate(first)).toLocaleDateString().slice(0, 10)
        week.push(day)
    }
    const options = {
        chart: {
            id: 'weeks-focus-time'
        },
        xaxis: {
            categories: week,
            title: {
                text: 'This Week',
            }
        },
        yaxis: {
            title: {
                text: 'Focus Time (in hours)',
            }
        },
        colors: [
            "#fb923c",
        ]
    }
    const series = [{
        name: 'Focus Time',
        data: [30, 40, 35, 50, 49, 60, 70]
    }]
    return (
        <BarChart options={options} series={series}></BarChart>
    )
}

export default TaskChart