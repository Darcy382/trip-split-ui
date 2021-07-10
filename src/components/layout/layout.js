import Header from "../header/header"
import Transactions from "../transactions/transactions"
import People from "../people/people"
import classes from "./layout.module.css"

const Layout = (props) => {
    return (
        <div>
            <div class={classes.header}>
                <Header></Header>
            </div>
            <div class={classes.transactions}>
                <Transactions></Transactions>
            </div>
            <div class={classes.people}>
                <People></People>
            </div>
        </div>
    )
}

export default Layout

