import classes from './AddButton.module.css'
import Button from 'react-bootstrap/Button'

function AddButton(props) {
    return (
        <div className={classes.buttonContainer}>
            <Button onClick={props.addHandler} variant="dark"><p class={classes.buttonText}>{props.children}</p></Button>
        </div>
    )
}

export default AddButton;