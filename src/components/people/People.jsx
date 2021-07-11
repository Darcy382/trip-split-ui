import SectionTitle from "../SectionTitle/SectionTitle"
import classes from "./People.module.css"
import PersonCard from "./PersonCard/PersonCard"

const People = (props) => {
    return (
        <div class={classes.people}>
            <SectionTitle>People</SectionTitle>
            <PersonCard name={"John K"} amount={34.64}></PersonCard>
            <PersonCard name={"Sal Khan"} amount={75.28}></PersonCard>
            <PersonCard name={"Cal D"} amount={-34.64}></PersonCard>
        </div>
    )
}

export default People