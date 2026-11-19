// import { CheckBox } from "@mui/icons-material"
// import { FormControlLabel } from "@mui/material"

// // Basic checkbox
// const CheckBoxComponent = () =>{

//     return(
//         <div>
//             <FormControlLabel control={<CheckBox/>} label="Accept term and Conditions"/>
//         </div>
//     )
// }

// export default CheckBoxComponent

// // Checkbox with useState
// import { Checkbox, FormControlLabel, Stack } from "@mui/material"
// import { useState } from "react"

// const CheckBoxComponent = () => {

//     const [check,setChecked] = useState(false)

//     const handleChange =(eventObject)=>{
//         setChecked(eventObject.target.checked)
//         // console.log('====================================');
//         // console.log(eventObject);
//         // console.log('====================================');
//     }

//     return (
//        <div>
//         <FormControlLabel 
//             control={<Checkbox checked={check} onChange={handleChange} />}
//             label="Accept terms and conditions"
//         />

//         <Stack direction={'row'} spacing={3}>
//             <h1>Checkbox Status : </h1>{check?<h3>Checked</h3>:<h3>Unchecked</h3>}
//         </Stack>

//        </div>
//     )
// }
// export default CheckBoxComponent

// Checkbox with useState
import { Checkbox, FormControlLabel, Stack } from "@mui/material"
import { useState } from "react"

const CheckBoxComponent = () => {

    const [languages,setLanguages] = useState([]);

    const handleChange =(eventObject)=>{
      const {value,checked} = eventObject.target;

      console.log('====================================');
      console.log("checked:",checked,"Value:",value);
      console.log('====================================');

      if(checked==true){
        setLanguages([...languages,value]);
        // console.log(value);
        
      }else{
        setLanguages(languages.filter((element)=>element!==value))
      }

    }

    return (
       <div>
        <FormControlLabel 
            control={<Checkbox value={"java"} onChange={handleChange} />}
            label="Java"
        />
        <FormControlLabel 
            control={<Checkbox value={"python"} onChange={handleChange} />}
            label="Python"
        />
        <FormControlLabel 
            control={<Checkbox value={"javascript"} onChange={handleChange} />}
            label="Javascript"
        />
        <FormControlLabel 
            control={<Checkbox value={"react"} onChange={handleChange} />}
            label="React"
        />

        <p>{languages.join(",")}</p>

       </div>
    )
}
export default CheckBoxComponent