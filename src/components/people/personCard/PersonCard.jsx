import classes from "./PersonCard.module.css"
import Card from 'react-bootstrap/Card';

const PersonCard = (props) => {
    return (
        <div class={classes.cardContainer}>
            <Card>
                <Card.Body>
                    <div style={{display:'flex', alignItems:"center"}}>
                        <p class={classes.name}>{props.name}</p>
                        <div class={classes.amountContainer}>
                            <p class={classes.amountText}>due $34.64</p>
                        </div>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default PersonCard