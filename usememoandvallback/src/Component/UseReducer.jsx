import React, { useReducer } from 'react'

const UseReducer = () => {
    const InitalCount = {count: 0};
   const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
      case "DECREMENT":
        return {count: state.count - 1};
    default:
      return state;
  }
};

    const [state, dispatch] = useReducer(reducer , InitalCount);
  return (
    <div>
       <div className="count flex justify-center">
        {state.count}
       </div>
       <div className="flex flex-col gap-2">
        <button onClick={() => dispatch({ type: "INCREMENT" })} className='bg-white border rounded'>Badhao++</button>
       <button onClick={() => dispatch({ type: "DECREMENT" })} className='bg-white border rounded'>Ghatato--</button>
       </div>
       
    </div>
  )
}

export default UseReducer;