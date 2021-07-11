import classes from "./People.module.css"
import PersonCard from "./PersonCard/PersonCard"

const People = (props) => {
    return (
        <div class={classes.people}>
            <h2>People</h2>
            <PersonCard name={"John K"}></PersonCard>
        </div>
    )
}

export default People