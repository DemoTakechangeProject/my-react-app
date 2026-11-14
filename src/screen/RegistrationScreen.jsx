import ButtonComponent from "../component/ButtonComponent"

const RegistrationScreen=()=>{

    
    const RegistrationEvent=()=>{
        alert("This is Registration screen button");
    }

    return(
        <ButtonComponent
            button_name={"Registration"}
            ClickEvent={RegistrationEvent}
            button_type={"contained"}
        />
    )
}

export default RegistrationScreen