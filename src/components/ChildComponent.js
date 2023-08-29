import React from 'react'

const ChildComponent = ({isLoggedIn}) => {
    function formHandler(event){
        event.preventDefault()
    }
  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="username">Username:</label>
        <input type='text'/>  <br /><br />
        <label htmlFor="password">Password:</label>
        <input type='password'/>
        <br />
        <button onClick={()=>isLoggedIn(true)}>Login</button>
      </form>
    </div>
  )
}

export default ChildComponent
