import { Link } from "react-router-dom";

export default function Submit(){

    return(
        
        <div className="container1"  style={{height:'210px'}}>
            <div className="insideContainer1"> </div>
            <div>
            <h1 >Assignment Task</h1>
            <p style={{position:'relative' , top:'10px' , left:'28px'}}>Your response has been recorded </p>
            <a href='/'style={{position:'relative' , top:'17px' , left:'28px'}} >Submit another response</a></div>
        </div>
    )
}