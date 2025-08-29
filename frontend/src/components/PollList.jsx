import { useEffec,useState } from "react";

import {Link} from "react-router-dom";
import { api } from "../api";
import { useEffect } from "react";

export default function PollList() {
    const [polls,setPolls]=useState([]);

    useEffect(()=>{
        api.get("/polls").then(res=>setPolls(res.data));
    },[]);

    return (
        <div>
            <h1>Available Polls</h1>
            {polls.map(p=>(
                <div key={p.id}> 
                <Link to={`/poll/${p.id}`}>{p.question}</Link>
                </div>
            ))}
        </div>
    );
}