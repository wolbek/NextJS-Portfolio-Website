import classes from './aboutCard.module.css';

export default function Card(props){
    return (
        <div className={classes.card}>
            <div>{props.icon}</div>
            <div className={classes.heading}> {props.heading} </div>
            <div className={classes.content}> {props.content} </div>
        </div>
    );
}