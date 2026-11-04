// import { Button } from "@mui/material";
// import { useState } from "react";
// import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

// const StateExample = () => {

//     const [name, setName] = useState("Rajeshwari");

//     const changeName = () => {
//         setName("Gayatri")
//     }

//     return (

//         <div>
//             <h1>My name is : {name}</h1>
//             <button
//                 onClick={changeName}
//             >Change name</button>
//         </div>

//     )
// }

// export default StateExample;

import { Button } from "@mui/material";
import { useState } from "react";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const StateExample = () => {

    const [name, setName] = useState("Rajeshwari");

    const changeName = () => {
        setName("Gayatri")
    }

    return (

        <div>
            <h1>My name is : {name}</h1>
            <Button
                variant="contained"
                onClick={changeName}
                endIcon={<ChangeCircleIcon />}>
                Change name
            </Button>
        </div>

    )
}

export default StateExample;