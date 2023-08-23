import { useNavigate } from "react-router-dom";

export default function Footer(){
const navigate =useNavigate();

  function  handleclick(){

    window.location.reload();
    }
    function handlesubmit(){
navigate('/submit')
    }
    return(
        <div className="footer">
            <div className="box1">
           <button onClick={handlesubmit} className="btn">Submit</button>
           <div className="box1input"><div></div><span>Page 1 of 1</span></div>
           <div onClick={handleclick}><p>Clean form</p></div>
           </div>
           <p className="footerp" style={{fontSize:'12px' , color:'#616162'}}>Never submit passwords through Google Forms.</p>
           <p className="footerp"style={{fontSize:'12px' , color:'#616162' , textAlign:'center'}}>This content is neither created nor endorsed by Google. <span>Report Abuse</span>  - <span>Terms of Service</span> - <span>Privacy Policy</span></p>
           <p className="footerp" style={{fontSize:'20px' , color:'#616162' , textAlign:'center' , fontWeight:'600'}}>Google <span style={{fontWeight:'500'}}>Forms</span></p>
        </div>
    )
} 