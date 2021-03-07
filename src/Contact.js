import React,{useEffect,useState} from 'react'
function Contact(props){

    const [name,setName] = useState("Pranshu")
    // const [age,setAge] = useState(25)
    // useEffect(()=>{
    //     console.log("effect props > ",props)
    // },[])
    // useEffect(()=>{
    //     console.log("effect props > ",props)
    // },[props.name])
    let changeName=((e)=>{
        console.log("name changed")
        setName(e.target.value)
    });

    return(
        <div>
            <h1>Contact Page</h1>
            <input type="text" value={name} onChange={changeName} />
            <h2>Name : {name}</h2>
            {/* <h2>Name : {props.name}</h2> */}
            {/* <h2>{name}</h2>
            <h2>{age}</h2>
            <button onClick={()=>{setName("Pranshu Sharma")}}>Change Name</button>
            <button onClick={()=>{setAge(26)}}>Change Age</button> */}
        </div>
    )
}

export default Contact