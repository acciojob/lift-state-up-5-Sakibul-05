import React,{useState} from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log(isLoggedIn)
  return (
    <div>
      <h1 className="text-center">Parent Component</h1><br/>
      {
        isLoggedIn ? <p>You are logged in!</p> :  <ChildComponent isLoggedIn={setIsLoggedIn}/> 
      }
      
    </div>
  )
}

export default ParentComponent
