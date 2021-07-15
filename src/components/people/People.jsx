import {useState} from 'react'
import ScrollList from "components/ScrollList/ScrollList"
import SectionTitle from "../SectionTitle/SectionTitle"
import classes from "./People.module.css"
import PersonCard from "./PersonCard/PersonCard"
import AddButton from "components/Button/AddButton"

const People = (props) => {


    const [peopleList, setPeopleList] = useState([
        {name: "John K", amount: 43.64},
        {name: "Sal Khan", amount: 75.28},
        {name: "Cal D", amount: -32.21}
    ])

    function renderPeopleList() {
        return peopleList.map((person) => 
            <PersonCard 
                name={person.name}
                amount={person.amount}
            />
        )
    }

    function addPerson() {
        setPeopleList([...peopleList, {name: "Ben Stone", amount: -34.11}])
    }

    return (
        <div class={classes.people}>
            <SectionTitle>People</SectionTitle>
            <ScrollList>
                {renderPeopleList()}
                <AddButton addHandler={addPerson} variant="dark">Add Person</AddButton>
            </ScrollList>

        </div>
    )
}

export default People