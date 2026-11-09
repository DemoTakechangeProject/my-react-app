// import { Autocomplete, TextField } from "@mui/material"

// const AutoCompleteComponent = () => {

//     const country = [
//         "India",
//         "USA",
//         "UK",
//         "Canada",
//         "Australia"
//     ];

//     return (
//         <div style={{width:300,margin:"40px"}}>
//             <Autocomplete
//                 options={country}
//                 renderInput={
//                     (value) => (
//                         <TextField
//                             {...value}
//                             label="Country"
//                             placeholder="Search country"
//                         />
//                     )
//                 }
//             />
//         </div>
//     )
// }

// export default AutoCompleteComponent

// import { Autocomplete, TextField } from "@mui/material"
// import { useState } from "react";

// const AutoCompleteComponent = () => {

//     const [country,setCountry] = useState("");
//     const [state,setState] = useState([])

//     const countries = [
//         "India",
//         "USA",
//         "UK",
//         "Canada",
//         "Australia"
//     ];

//     const handleCountry = (event,value) =>{
//         setCountry(value) 
//     }

//     return (
//         <div style={{width:300,margin:"40px"}}>
//             <Autocomplete
//                 options={countries}
//                 onChange={handleCountry}
//                 renderInput={
//                     (value) => (
//                         <TextField
//                             {...value}
//                             label="Country"
//                             placeholder="Search country"
//                         />
//                     )
//                 }
//             />
//             <h2>Selected country : {country}</h2>
//         </div>
//     )
// }

// export default AutoCompleteComponent


import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react";

const AutoCompleteComponent = () => {

    const [country,setCountry] = useState("");
    const [state,setState] = useState([])

    // const countries = [
    //     "India",
    //     "USA",
    //     "UK",
    //     "Canada",
    //     "Australia"
    // ];


    const countries = [
        {id:1,name:"India"},
        {id:2,name:"USA"},
        {id:3,name:"UK"},
        {id:4,name:"Canada"},
        {id:5,name:"Australia"}
    ]

    const handleCountry = (event,value) =>{
        // setCountry(value) 
        console.log('====================================');
        console.log(value);
        console.log('====================================');

        setCountry(value.name);
    }

    return (
        <div style={{width:300,margin:"40px"}}>
            <Autocomplete
                options={countries}
                getOptionLabel={(option)=>
                    option.name
                }
                onChange={handleCountry}
                renderInput={
                    (value) => (
                        <TextField
                            {...value}
                            label="Country"
                            placeholder="Search country"
                        />
                    )
                }
            />
            <h2>Selected country : {country}</h2>
        </div>
    )
}

export default AutoCompleteComponent