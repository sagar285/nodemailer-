import React,{useState} from 'react'
import axios from 'axios'

const App = () => {
  const [email,setemail] =useState("")

  const sendemail =async(e)=>{
    e.preventDefault();
    const result =await axios.post("http://localhost:3000/send",{email})
       
  }
  return (
    <div>
      <div>
        <input type="email" className='bg-blue-900' placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <button onClick={sendemail}>send</button>
      </div>
    </div>
  )
}

export default App