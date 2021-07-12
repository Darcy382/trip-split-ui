import classes from "./Transactions.module.css"
import SectionTitle from "components/SectionTitle/SectionTitle"
import TransactionCard from "./TransactionCard/TransactionCard"
import ScrollList from "components/ScrollList/ScrollList"

const Transactions = (props) => {
    return (
        <div class={classes.transactions}>
            <SectionTitle>Transactions</SectionTitle>
            <ScrollList>
                <TransactionCard 
                    transactionName="Airbnb"
                    buyerName="Joe B"
                    splitBy="All"
                    transactionAmount="357.43"
                />
                <TransactionCard 
                    transactionName="Giant"
                    buyerName="Jimmy Chin"
                    splitBy="2"
                    transactionAmount="204.98"
                />
                <TransactionCard 
                    transactionName="Gas"
                    buyerName="John K"
                    splitBy="All"
                    transactionAmount="45.62"
                />
                <TransactionCard 
                    transactionName="Food Lion"
                    buyerName="Sal Khan"
                    splitBy="1"
                    transactionAmount="10.56"
                />
                <TransactionCard 
                    transactionName="Grand Rodeo"
                    buyerName="Cal D"
                    splitBy="All"
                    transactionAmount="402.99"
                />
            </ScrollList>
        </div>
    )
}

export default Transactions