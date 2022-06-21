import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Show = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5050/form").then(res => {
      setState(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div>
      <center> <h1>Details of form
        {state.map((ele) => {
          return <div>


            <li >{ele.name}</li>
            <img src={ele.photo} />

          </div>


        }

        )}
      </h1> </center>

    </div>
  )
}

export default Show