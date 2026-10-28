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

import { useState } from "react"
const EventExample=()=>{

    const [count,setCount] = useState(0);

    const increment = () =>{
       setCount(count+1)
    }
    const decrement = () =>{
       setCount(count-1)
    }
    return(
        <>
           <h1>{count}</h1>

           <button
             onClick={increment}
           >
            +
           </button>

            <button
             onClick={decrement}
           >
            -
           </button>
        </>
    )
}
export default EventExample

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