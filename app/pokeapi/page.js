'use client';

import classes from './page.module.css';
import { useState, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PokemonDetailCard from '@/components/pokemonDetailCard';

export default function ApiPage(){
    const pokemonInputRef = useRef();
    const [pokemonSearched, setPokemonSearched] = useState('');
    const [abilities,setAbilities] =useState([]);
    const [imageSrc, setImageSrc] =useState('');
   
    async function findPokemonDetails(event){
        try{
            event.preventDefault();
            const query = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInputRef.current.value}`);
            const response = await query.json();
            const tempAbilities=[];

            for(let ability in response.abilities){
                tempAbilities.push(<p>{response.abilities[ability]['ability']['name']}</p>);
            }

            setAbilities(tempAbilities);
            setImageSrc(response['sprites']['front_default']);
            setPokemonSearched(pokemonInputRef.current.value);
            pokemonInputRef.current.value='';
        } catch{
            alert('Not Found');
        }
        
    }

    return (
        <div className={classes.searchContainer}>
            <h1>Search Pokemon</h1>
            <form onSubmit={findPokemonDetails} className={classes['blog-search-bar']}>
                <input type='text' ref={pokemonInputRef}></input>
                <button className={classes['blue-btn']}><SearchIcon/></button>
            </form>
            {pokemonSearched ? <PokemonDetailCard name={pokemonSearched} image={<img src={imageSrc} width='200px'/>} abilities={abilities} /> : undefined}    
            
        </div>
    );
};