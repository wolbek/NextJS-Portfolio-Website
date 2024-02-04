import classes from './pokemonDetailCard.module.css';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export default function PokemonDetailCard(props){
    return (    
        <div className={classes.main}>
            
            <p className={classes.title}><LabelImportantIcon/>&nbsp; {props.name}</p>
            {props.image}

            <p><span>Abilities: </span>{props.abilities}</p>
        </div>
    );
};