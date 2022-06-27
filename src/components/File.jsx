import React, { useState } from 'react'
import axios from 'axios'

const File = () => {
    const [state,setState] =useState({
        name:"",
        file:""
    })
    const changeHandler =(event) =>{
      setState({...state,name:event.target.value})
    }
    const fileHandler =(event) =>{
       console.log(event.target.files)
       setState({...state,file:event.target.files[0]})
      }
    const clickHandler =()=>{
        // FormData
        const formData =new FormData();
        formData.append("file",state.file)
        formData.append("name",state.name)

 const config ={
  headers:{
    "Content-type":"multipart/form-data"
  }
}
axios.post("http://localhost:3000/upload",formData,config).then(res=>{
    console.log(res.data)
}).catch(err=>{
    console.log(err)
})
    }

  return (
    <div>
        <center>
              <h1>File uplaod</h1>
            <input type="text" onChange={changeHandler}/>
            <input type="file" onChange={fileHandler}/>
            ,<button onClick={clickHandler}>Sumbit</button>
        </center>
        </div>
  )
}

export default File;