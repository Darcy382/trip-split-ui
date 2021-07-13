import classes from "./TransactionCard.module.css"
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TransactionCard(props) {
    return (
        <div class={classes.cardContainer}>
            <Card>
                <Card.Body>
                    <div class={classes.bodyContainer}>
                        <h3 class={classes.h3Title}>{props.transactionName}</h3>
                        <div class={classes.section}>
                            <p class={classes.sectionName}>Bought by:</p>
                            <h3 class={classes.h3Title}>{props.buyerName}</h3>
                        </div>
                        <div class={classes.section}>
                            <p class={classes.sectionName}>Split by:</p>
                            <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    <Tooltip>
                                        Tooltip on.
                                    </Tooltip>
                                }
                            >
                                <h3 class={classes.splitBy}>{props.splitBy}</h3>
                            </OverlayTrigger>
                        </div>
                        <h3 class={classes.amount}>${props.transactionAmount}</h3>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TransactionCard