export default function Card3(props) {
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
               <div className="commonCardBox" style={{width:'590px', margin:"auto"}}>
               <div className="cardbox"><p>{props.title}</p><span style={{color:'red'}}>*</span></div>
              
                  <div >
                    <div className="multipleBox">
                        <div style={{width:"135px"}}></div>
                        <div>column 1</div>
                        <div>column 2</div>
                        <div>column 3</div>
                    </div>
                  {  props?.optionarray.map((item , index )=>{
                        return(
                       
                        <div key ={`props.type${index}`} className="multipleBox">
                        <label htmlFor="row1" style={{width:"135px"}}>{item}</label>
                        <input className={item} type={props.type}  id={`${item}1` }  onClick={(e)=>{handleclick(item,e)}}/>
                        <input className ={item} type={props.type}  id={`${item}2`}  onClick={(e)=>{handleclick(item,e)}} />
                        <input className={item} type={props.type}  id={`${item}3`}  onClick={(e)=>{handleclick(item,e)}}/>
                
                    </div>
                    )})}
                   

                  </div>
            
               
               
               
               </div>
           </div>
       )
   }