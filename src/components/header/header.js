import classes from "./header.module.css"

const Header = (props) => {
    return (
        <div class={classes.header}>
            <h1 class={classes.title}>Trip split!</h1>
        </div>
    )
}

export default Header