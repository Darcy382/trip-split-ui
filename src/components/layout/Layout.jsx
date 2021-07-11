import Header from "../Header/Header"
import Transactions from "../Transactions/Transactions"
import People from "../People/People"
import classes from "./Layout.module.css"

const Layout = (props) => {
    return (
        <div>
            <div class={classes.header}>
                <Header></Header>
            </div>
            <div class={classes.gridContainer}>
                <div class={classes.transactions}>
                    <Transactions></Transactions>
                </div>
                <div class={classes.people}>
                    <People></People>
                </div>
            </div>
        </div>
    )
}

export default Layout

