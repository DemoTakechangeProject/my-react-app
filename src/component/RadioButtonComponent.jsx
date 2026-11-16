import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";
import '../style/CommonCss.css'

const RadioButtonComponent = () => {

    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value)
    }
    return (
        <div>

            <FormControl>
                <Stack direction={'row'} spacing={2}>
                    
                    <RadioGroup
                        value={gender}
                        onChange={handleChange}
                    >
                        <div className="RadioButtonStyle">
                            <FormLabel>Gender</FormLabel>
                            <FormControlLabel value={'male'} control={<Radio />} label="Male" />
                            <FormControlLabel value={'female'} control={<Radio />} label="Female" />
                            <FormControlLabel value={'other'} control={<Radio />} label="other" />
                        </div>
                    </RadioGroup>
                </Stack>
            </FormControl>
            <h2>Selected gender:{gender}</h2>
        </div>
    )
}
export default RadioButtonComponent;