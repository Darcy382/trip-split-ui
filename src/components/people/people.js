import classes from "./people.module.css"
import PersonCard from "./personCard/personCard"

const People = (props) => {
    return (
        <div class={classes.people}>
            <h2>People</h2>
            <PersonCard></PersonCard>
        </div>
    )
}

export default People