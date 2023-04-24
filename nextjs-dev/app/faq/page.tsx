"use client"
import React, { useState } from 'react'
import { datafaq } from './data'



export default function FAQPage() {
    const [isOpen, setisOpen] = useState(false)

    const handleClick = () => {
        setisOpen(!isOpen)
    }
    console.log(datafaq);

    return (
        <>
            {datafaq.map((data: any) => (

                <div key={data.id}>
                    <h1>FAQ</h1>
                    <button onClick={handleClick} >
                        <h2>{data.qes}</h2>
                    </button>

                    {isOpen && <p>{data.ans}</p>}
                </div>
            ))}</>
    )
}


