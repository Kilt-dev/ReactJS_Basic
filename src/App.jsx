import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Form is Rect</h2>
    <br />
    <div>
      <label className="bold"> First Name *</label><br />
      <input type="text" placeholder="Enter First Name" style={{ width: '400px' }} /><br />
    </div>
    <div>
      <label className="bold"> Last Name *</label><br />
      <input type="text" placeholder="Enter Last Name" style={{ width: '400px' }} /><br />
    </div>
    <div>
      <label className="bold"> Enter Email *</label><br />
      <input type="email" placeholder="Enter Email" style={{ width: '400px' }} /><br />
    </div>
    <div>
      <label className="bold"> Contact *</label><br />
      <input type="tel" placeholder="Enter Contact Number" style={{ width: '400px' }} /><br />
    </div>
    <div>
      <label className="bold">Gender*</label><br />
      <input type="radio" />
      <label htmlFor="male">Male</label>
      <input type="radio" />
      <label htmlFor="female">Female</label>
      <input type="radio" />
      <label htmlFor="orther">Orther</label>
    </div>
    <div>
      <label className="bold">Your best Subject*</label><br />
      <input type="checkbox" />
      <label htmlFor="english">English</label>
      <input type="checkbox" />
      <label htmlFor="maths">Maths</label>
      <input type="checkbox" />
      <label htmlFor="physics">Physics</label>
    </div>
    <div>
      <label  className="bold">Upload Resume*</label><br />
      <input type="file" />
    </div>
    <div>
      <label className="bold">Enter URL*</label><br />  
      <input type="text" placeholder="Enter url" style={{ width: '400px' }} /><br />
    </div>
    <div>
      <label className="bold">Select your choice</label><br />
      <select style={{ width: '400px' }}>
        <option value="select your ans">Select your ans</option>
      </select>
    </div>
    <div>
    <label className="bold">About</label><br />
  <textarea 
    placeholder="About yourself" 
    style={{ width: '400px', height: '100px' }} 
  /><br />
  </div>  
  <div>
    <label  className="bold">Submit OR Result</label><br />
    <input type="button" value="Result" className="btn-spacing" />
    <input type="button" value="Submit" className="btn-spacing" />
  </div>
  </>
  )
}

export default App
