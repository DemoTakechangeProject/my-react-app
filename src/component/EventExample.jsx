// const EventExample=()=>{
//     const handleClick=()=>{
//         alert("Button Clicked")
//     }
//     return(
//         <>
//            <button
//              onClick={handleClick}
//            >
//             Click Me
//            </button>
//         </>
//     )
// }
// export default EventExample

// Without useState
// const EventExample=()=>{

//     let count=0;

//     const increment = () =>{
//         count++;
//         console.log("Inc Count :",count)
//     }

//     const decrement = () =>{
//         count--;
//         console.log("Dec Count:",count)
//     }

//     return(
//         <>

//            <h1>{count}</h1>

//            <button
//              onClick={increment}
//            >
//             +
//            </button>

//             <button
//              onClick={decrement}
//            >
//             -
//            </button>

//         </>
//     )
// }
// export default EventExample

// import { useState } from "react"
// const EventExample=()=>{

//     const [count,setCount] = useState(0);

//     const increment = () =>{
//        setCount(count+1)
//     }
//     const decrement = () =>{
//        setCount(count-1)
//     }
//     return(
//         <>
//            <h1>{count}</h1>

//            <button
//              onClick={increment}
//            >
//             +
//            </button>

//             <button
//              onClick={decrement}
//            >
//             -
//            </button>
//         </>
//     )
// }
// export default EventExample

// State Example

// import { useState } from "react"

// const EventExample = () => {

//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>Count:{count}</h1>
//             <button
//                 onClick={()=>setCount(count+1)}
//             >+</button>
//             <button
//                 onClick={()=>setCount(count-1)}
//             >-</button>
//         </div>
//     )
// }

// export default EventExample

// import { useState } from "react"
// import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// import {ControlPoint,RemoveCircle} from '@mui/icons-material';

// const EventExample=()=>{

//     const [count,setCount] = useState(0);

//     const increment = () =>{
//        setCount(count+1)
//     }
//     const decrement = () =>{
//        setCount(count-1)
//     }
//     return(
//         <>
//            <h1>{count}</h1>

//            {/* <ControlPointIcon onClick={increment}/>
//            <RemoveCircleIcon onClick={decrement}/> */}

//            <ControlPoint onClick={increment}/>
//            <RemoveCircle onClick={decrement}/>
//         </>
//     )
// }
// export default EventExample

import { useState } from "react"
import { ControlPoint, RemoveCircle, RestartAlt, Undo } from '@mui/icons-material';

const EventExample = () => {

   const [count, setCount] = useState(0);
   const [restore,setRestore] = useState(0);

   const increment = () => {
      if (count < 10) {
         setCount(count + 1)
         setRestore(count);
      }
   }
   const decrement = () => {
      if (count > 0) {
         setCount(count - 1)
         setRestore(count);
      }
   }
   const resetCounter= () =>{
      setCount(0);
   }
   const undoValue=()=>{
      setCount(restore)
   }
   return (
      <>
         <h1>{count}</h1>
         <ControlPoint onClick={increment} />
         <RemoveCircle onClick={decrement} />
         <RestartAlt onClick={resetCounter}/>
         <Undo onClick={undoValue}/>
        </>
   )
}
export default EventExample