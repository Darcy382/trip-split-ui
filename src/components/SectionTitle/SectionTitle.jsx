import classes from './SectionTitle.module.css'

const SectionTitle = (props) => {
    return (
        <h2 class={classes.title}>{props.title}</h2>
    )
}

export default SectionTitle

