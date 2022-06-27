import React, { useState } from 'react'
import axios from 'axios'
const Form = () => {
  const [photo, setPhoto] = useState()
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    Ed1: "",


  })
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleChange = (e) => {
    setPhoto(e.target.files[0])
  }



  const sumbithandler = (e) => {
    console.log(photo, "photo")



    const formdata = new FormData();

    formdata.append("name", data.name)
    formdata.append("email", data.email)
    formdata.append("nunber", data.number)
    formdata.append("Ed1", data.Ed1)

    formdata.append("file", photo)
    const b = { headers: { "content-type": "multipart/form-data" } }
     axios.post("http://localhost:5050/form/formdata",formdata).then(response=>{
        console.log("posted")
     })
   



    console.log(data);

  }


  return (
    <div>
      <center>
        <div>  <h1>Form Details</h1>
          <label>Name :</label>
          <input type='text' name='name' onChange={changeHandler} /></div><br />
        <div>
          <label>Email :</label>
          <input type='Email' name='email' onChange={changeHandler} />
        </div><br />

        <div>
          <label>phoneNumber:</label>
          <input type='tel' name='number' onChange={changeHandler} />
        </div><br />

        <div>
          <label>Education datails 1 :</label>
          <input type='text area' name='Ed1' onChange={changeHandler} />

        </div><br />

        <div>
          <label>file upload :</label>
          <input type='file' name='photo' onChange={handleChange} />

        </div><br />



        <div>
          <button onClick={sumbithandler} style={{ background: "orange", fontSize: "20px", color: "white" }}>sumbit</button>
        </div>

      </center>
    </div>
  )
}

export default Form;