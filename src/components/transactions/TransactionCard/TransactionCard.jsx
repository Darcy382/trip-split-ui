import React from "react"
import classes from "./TransactionCard.module.css"
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import ThreeDotsSvg from 'icons/three-dots-vertical.svg';

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <div 
        class='threeDotsContainer' 
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <img class="threeDots" src={ThreeDotsSvg}/>
    </div>
))

function TransactionCard(props) {
    return (
        <div class={classes.cardContainer}>
            <Card bsPrefix="custom-card card">
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
                        <Dropdown>
                            <Dropdown.Toggle as={ThreeDots} id="dropdown-custom-components" />
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item>Edit</Dropdown.Item>
                                <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                       
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TransactionCard