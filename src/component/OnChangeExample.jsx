// import { useState } from "react"

// const OnChangeExample = () => {
//     const [name, setName] = useState("")

//     const handleChange = (event) => {
//         // console.log('************************************');
//         // console.log(event);
//         // console.log(event.target)
//         // console.log(event.target.value)
//         setName(event.target.value)
//         // console.log('====================================');
//     }

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={handleChange}
//             />
//             <h1>Your name is:{name}</h1>
//         </div>
//     )
// }

// export default OnChangeExample

import { useState } from "react"
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { VisibilityOff, Visibility } from '@mui/icons-material';
const OnChangeExample = () => {
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    const handleChange = (event) => {
        setPassword(event.target.value)
    }

    const onClickEvent = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <InputLabel>Password</InputLabel>
            <FilledInput
                endAdornment={
                    <InputAdornment position="end">
                        <div onClick={onClickEvent}>
                            {visible ? <Visibility /> : <VisibilityOff />}
                        </div>
                    </InputAdornment>
                }
                onChange={handleChange}
            />
        </div>
    )
}

export default OnChangeExample