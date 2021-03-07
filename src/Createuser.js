import React,{useState} from 'react';
function CreateUser(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [address,setAddress] = useState("")
    function makeUser(){
        console.log({name:name,age:age,address:address})
    }
    return(
        <div>
            <h1>Create new user</h1>
            <input type="text" name="Username" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}} />
            <input type="text" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
            <button onClick={makeUser}>Create</button>
        </div>
    )
}

export default CreateUser