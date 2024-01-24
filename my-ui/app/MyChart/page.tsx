"use client"
import React from "react"
// we need some parts of chart.js - just the bits we need
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from "react-chartjs-2"

// to use Chart.js we ned to register each of the imports
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // true
        },
        title: {
            display: true, // {showTitle} as a boolean
            text: 'Configured Chart.js',
        }
    }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Points A',
            data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3],
            borderColor: 'rgba(47,97,68,1)',
        },
        {
            label: 'Points B',
            data: [0.7, 0.4, 0.6, 0.3, 0.1, 0.4, 0.2, 0.3],
            borderColor: 'rgba(47,68,97,1)'
        }
    ]
}

export default function DefaultChart(){
    return <Line data={data} options={options} />
}
