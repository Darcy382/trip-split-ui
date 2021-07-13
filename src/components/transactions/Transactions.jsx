import { useState } from 'react';
import classes from "./Transactions.module.css"
import SectionTitle from "components/SectionTitle/SectionTitle"
import TransactionCard from "./TransactionCard/TransactionCard"
import ScrollList from "components/ScrollList/ScrollList"
import AddButton from "components/Button/AddButton"

const Transactions = (props) => {

    const [transactions, setTransactions] = useState([
        {transactionName: "Airbnb", buyerName: "Joe B", splitBy: "All", transactionAmount: "204.98"},
        {transactionName: "Giant", buyerName: "Jimmy Chin", splitBy: "2", transactionAmount: "204.98"},
        {transactionName: "Gas", buyerName: "John K", splitBy: "All", transactionAmount: "45.62"},
        {transactionName: "Food Lion", buyerName: "Sal Khan", splitBy: "1", transactionAmount: "10.56"},
        {transactionName: "Grand Rodeo", buyerName: "Cal D", splitBy: "All", transactionAmount: "402.99"}
    ])

    function renderTransactions() {
        const transactionCopy =  transactions.map((transaction) => 
            <TransactionCard
                transactionName={transaction.transactionName}
                buyerName={transaction.buyerName}
                splitBy={transaction.splitBy}
                transactionAmount={transaction.transactionAmount}
            />
        )
        return transactionCopy
    }

    function addTransaction() {
        setTransactions([...transactions, {transactionName: "Grand Rodeo", buyerName: "Cal D", splitBy: "All", transactionAmount: "402.99"}])
    }

    return (
        <div class={classes.transactions}>
            <SectionTitle>Transactions</SectionTitle>
            <ScrollList>
                {renderTransactions()}
                <AddButton action={addTransaction} variant="dark">Add Transaction</AddButton>
            </ScrollList>
        </div>
    )
}

export default Transactions