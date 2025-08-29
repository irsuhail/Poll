import { useEffect,useState,useMemo } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";



export default function PollDetail() {
    const {id}=useParams();
    const [poll,setPoll]=useState(null);

    useEffect(()=>{
        api.get(`/polls/${id}`).then(res=>setPoll(res.data));
    },[id]);

    const totalVotes=useMemo(()=>{
        return poll ? 
        poll.options.reduce((sum,o)=>sum+o.votes,0) : 0;
    }, [poll]);

    const vote=(optionText)=>{
        api.post(`/polls/${id}/vote`,setPoll(res.data));
    };

    if (!poll) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{poll.question}</h2>
            {poll.options.map(o=>(
                <div key={o.text}>
                <button onClick={()=> vote(o.text)}>
                  {o.text}
                </button>

                <span> - {o.votes} votes ({totalVotes ? ((o.votes / totalVotes)*100).toFixed(1) : 0}%)

                </span>

                </div>
            ))}
        </div>
    );
}