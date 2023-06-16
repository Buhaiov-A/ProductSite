import React, { useEffect,useState } from 'react'

export default function Test() {
    const [count,setCount] = useState(JSON.parse(localStorage.getItem("count")) ?? 13)
    const [name ,setName] = useState(localStorage.getItem('name'))
    useEffect(()=>{
        console.log("count");
        localStorage.setItem('count',count)
    },[count])
    useEffect(() => {
      console.log("name");
      localStorage.setItem("name", name);
    }, [name]);
  return (
    <div>
        <h2>{count}</h2>
        <h3>{name}</h3>
        <button onClick={()=> setCount(prev=>prev+1)}>Add</button>
        <input onChange={e => setName(e.target.value)} />
    </div>
  )
}
