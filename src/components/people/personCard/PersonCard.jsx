import classes from "./PersonCard.module.css"
import Card from 'react-bootstrap/Card';

function RenderDueAmount(amount) {
    return (
        <div class={`${classes.amountContainer} ${classes.dueContainer}`    }>
            <p class={`${classes.amountText} ${classes.dueText}`}>{`due $${amount}`}</p>
        </div> 
    )
 
}

function RenderOweAmount(amount) {
    return (
        <div class={`${classes.amountContainer} ${classes.oweContainer}`}>
            <p class={`${classes.amountText} ${classes.oweText}`}>{`owe $${-1*amount}`}</p>
        </div>
    )

}

const PersonCard = (props) => {
    return (
        <div class={classes.cardContainer}>
            <Card>
                <Card.Body>
                    <div style={{display:'flex', alignItems:"center"}}>
                        <p class={classes.name}>{props.name}</p>
                        { props.amount >= 0 ? RenderDueAmount(props.amount) : RenderOweAmount(props.amount)}
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default PersonCard