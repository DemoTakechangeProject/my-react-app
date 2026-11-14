import Button from '@mui/material/Button';

const ButtonComponent = ({button_type,button_name,ClickEvent}) => {


    return (
        <div>
            <Button
                variant={button_type}
                onClick={ClickEvent}
            >
                {button_name}
            </Button>
        </div>
    )
}

export default ButtonComponent