import React from 'react'

function Greetings(props) {
  return (
    <div>
      {props.greetings.map((greeting) => {
        return (
          <div key={greeting.id}>
            <h1>{greeting.message}</h1>
          </div>
        );
      })}      
    </div>
  )
}

export default Greetings
