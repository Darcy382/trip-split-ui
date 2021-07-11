import classes from "./Transactions.module.css"
import SectionTitle from "components/SectionTitle/SectionTitle"

const Transactions = (props) => {
    return (
        <div class={classes.transactions}>
            <SectionTitle>Transactions</SectionTitle>
        </div>
    )
}

export default Transactions