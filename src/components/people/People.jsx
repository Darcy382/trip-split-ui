import SectionTitle from "../SectionTitle/SectionTitle"
import classes from "./People.module.css"
import PersonCard from "./PersonCard/PersonCard"

const People = (props) => {
    return (
        <div class={classes.people}>
            <SectionTitle>People</SectionTitle>
            <PersonCard name={"John K"}></PersonCard>
        </div>
    )
}

export default People