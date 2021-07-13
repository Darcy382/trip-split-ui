import classes from './ScrollList.module.css'

function ScrollList(props) {
    return (
        <div className={classes.scrollList}>
            {props.children}
        </div>
    )
}

export default ScrollList;