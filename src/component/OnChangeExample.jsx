import { useState } from "react"

const OnChangeExample = () => {
    const [name, setName] = useState("")

    const handleChange = (event) => {
        // console.log('************************************');
        // console.log(event);
        // console.log(event.target)
        // console.log(event.target.value)
        setName(event.target.value)
        // console.log('====================================');
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
            />
            <h1>Your name is:{name}</h1>
        </div>
    )
}

export default OnChangeExample