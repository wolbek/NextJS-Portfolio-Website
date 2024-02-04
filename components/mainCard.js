import classes from './mainCard.module.css';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export default function MainCard({details}){
    const cardDetails=[];
    for(let key in details){
        if(key!=='title'){
            cardDetails.push(<p><span>{key}: </span>{details[key]}</p>);
        }
    }

    return (    
        <div className={classes.main}>
            <p className={classes.title}><LabelImportantIcon/>&nbsp; {details.title}</p>
            {cardDetails}
        </div>
    );
};