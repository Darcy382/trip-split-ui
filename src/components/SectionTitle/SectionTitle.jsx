import classes from './SectionTitle.module.css'

const SectionTitle = (props) => {
    return (
        <h2 class={classes.title}>{props.children}</h2>
    )
}

export default SectionTitle

