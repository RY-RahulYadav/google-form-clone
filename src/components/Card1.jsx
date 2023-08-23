export default function Card1(props) {
 function handleclick(type ,  e ){
   
    const element = Array.from(document.getElementsByClassName(type))
    console.log(element)
    element.forEach(element => {
        element.checked=false
    });

    // const element1 =  document.getElementById(option)

    e.target.checked = true
 }


    return (
        <div className="container1" style={{height: props.height}}>
            <div className="commonCardBox" style={{ margin:"auto"}}>
            <div className="cardbox"><p>{props.title}</p><span style={{color:'red'}}>*</span></div>
           {(props.type=="radio"||props.type=="checkbox") &&<div className="listbox">
                
                 {
                    props?.optionarray.map((item, index)=>{
                        return(
                        <div key ={`props.type${index}`}>
                        <input className={props.type} onClick={(e)=>{handleclick(props.type , e)}} type={props.type} id={`${props.type}${item}`} />
                        <label htmlFor={`${props.type}${item}`}>{item}</label>
                        </div>
                    )})
                 }

            </div>}

            { props?.type=== "scale" && <div className="scalebox">
                <div><p>Worst</p></div>
                
                {
                   props.optionarray.map((item , index)=>{
                       return(
                       <div key ={`props.type${index}`} style={{display:"flex" , flexDirection:'column'}}>
                       <label htmlFor={`${props.type}${item}`}>{item}</label>
                       <input type="radio" className={props.type} onClick={(e)=>{handleclick(props.type , e)}}  id={`${props.type}${item}`} />
                       </div>
                   )})
                }
                <div><p>best</p></div>

           </div>
            }

           
            
            
            
            </div>
        </div>
    )
}