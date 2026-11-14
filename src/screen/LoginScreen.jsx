import ButtonComponent from "../component/ButtonComponent"

const LoginScreen=()=>{

    
    const LoginEvent=()=>{
        alert("This is Login screen button");
    }

    return(
        <ButtonComponent
            button_name={"Login"}
            ClickEvent={LoginEvent}
            button_type={"text"}
        />
    )
}

export default LoginScreen