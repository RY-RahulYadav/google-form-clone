export default function Card2(props) {
    return (
        <div>
            <div className="container1" style={{ height: props.height }}>
                <div className="commonCardBox" style={{  margin: "auto" }}>
                    <div className="cardbox"><p>{props.title}</p><span style={{ color: 'red' }}>*</span></div>
                    <div className="textBox" >
                        {props.type == 'dropdown' && <div>

                            <select className="dropdownBox">

                                <option>choose</option>
                                <option >option1</option>
                                <option>option2</option>
                                <option>option3</option>

                            </select>
                        </div>}
                        {props.type == "file" &&
                            <div className="fileBox">
                                <label htmlFor="fileupload" style={{color:'blue'}}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g transform="translate(-3, -3)"><path d="M6,14.25 L7.5,14.25 L7.5,16.5 L16.5,16.5 L16.5,14.25 L18,14.25 L18,16.5 C18,17.325 17.325,18 16.5,18 L7.5,18 C6.675,18 6,17.325 6,16.5 L6,14.25 Z M9.3075,10.8075 L11.25,8.8725 L11.25,15 L12.75,15 L12.75,8.8725 L14.6925,10.815 L15.75,9.75 L12,6 L8.25,9.75 L9.3075,10.8075 Z"></path><path fill="none"></path></g></svg>Add File</label>
                            <input className="hideinput" id='fileupload'  type={props.type} placeholder="Your Answer" style={{border:'none' , fontSize:'20px'}} /></div>}

                        {props.type == "text" &&
                            <input type={props.type} placeholder="Your Answer" />}



                    </div></div>
            </div>
        </div>
    )
}