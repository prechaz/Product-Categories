import React, { useEffect, useState } from 'react'

function Exam() {
    const [data,setdata]= useState([])
    useEffect(()=>{
       async function fetchdata(){
        const res = await fetch('http://localhost:8000/products')
        const data = await res.json()
        console.log(data)
        }
        fetchdata
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Exam
