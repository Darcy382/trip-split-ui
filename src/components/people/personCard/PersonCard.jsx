import classes from "./PersonCard.module.css"
import Card from 'react-bootstrap/Card';

const PersonCard = (props) => {
    return (
        <div class={classes.cardContainer}>
            <Card>
                <Card.Body><p class={classes.name}>{props.name}</p></Card.Body>
            </Card>
        </div>
    )
}

export default PersonCard