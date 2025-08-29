import { useRef,useState } from "react";
import {api} from "../api";
import { useNavigate } from "react-router-dom";

export default function CreatePoll() {
    const questionRef=useRef(null);
    const [options,setOptions]=useState(["",""]);
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        api.post("/polls",
            {question:questionRef.current.value, options},
            {headers:{Authorization:"Bearer MY_SECRET_TOKEN"}}
        ).then(()=>navigate("/"));
    };

    return (
        <form onSubmit={handleSubmit}>
        <input ref={questionRef} type="text" placeholder="Poll question" autoFocus/>
        {options.map((opt,idx)=>(
            <input key={idx}
            value={opt}
            onChange={e=>{
                const newOptions=[...options];
                newOptions[idx]=e.target.value;
                setOptions(newOptions);
            }}
            placeholder={`Option $(idx+1)`}
            />
            
        ))}

        <button type="button" 
        onClick={()=>setOptions([...options,""])}>+ Add Option</button>

        <button type="submit">Create Poll</button>

        </form>
    );
}
