import Button from '@mui/material/Button';
import '../style/CommonCss.css'

const ButtonComponent = ({button_type,button_name,ClickEvent}) => {

    return (
        <div>
            <Button
                variant={button_type}
                onClick={ClickEvent}
                className='common'
            >
                {button_name}
            </Button>
        </div>
    )
}

export default ButtonComponent