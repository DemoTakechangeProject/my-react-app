// import ButtonComponent from "../component/ButtonComponent"
// import Stack from '@mui/material/Stack'

// const LoginScreen = () => {


//     const LoginEvent = () => {
//         alert("This is Login screen button");
//     }

//     return (
//         <Stack direction={'row'} spacing={4}>
//             <ButtonComponent
//                 button_name={"Login"}
//                 ClickEvent={LoginEvent}
//                 button_type={"text"}
//             />
//             <ButtonComponent
//                 button_name={"Login out"}
//                 ClickEvent={LoginEvent}
//                 button_type={"text"}
//             />

//         </Stack>
//     )
// }

// export default LoginScreen

import ButtonComponent from "../component/ButtonComponent"
import '../style/CommonCss.css'

const LoginScreen = () => {

    const LoginEvent = () => {
        alert("This is Login screen button");
    }

    return (
        <div className="container">
            <ButtonComponent
                button_name={"Login"}
                ClickEvent={LoginEvent}
                button_type={"text"}
            />
            <ButtonComponent
                button_name={"Login out"}
                ClickEvent={LoginEvent}
                button_type={"text"}
            />
        </div>
    )
}

export default LoginScreen