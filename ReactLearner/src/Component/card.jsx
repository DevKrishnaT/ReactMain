import React from 'react'


const card = (props) => {
  return (
    <>
      <div className="maincard">
        <div className="imageArea">
          <div className="imges">
            image
          </div>
        </div>
        <div className="textArea">
          <h1>{props.name}</h1>

        </div>
      </div>
    </>
  )
}

export default card