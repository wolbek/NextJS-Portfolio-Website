'use client';

import classes from './navbar.module.css';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';

export default function NavBar(){
    const path = usePathname();
    return (
        <>
        <div className={classes.navbar}>
            <div className={classes.navbarLeftSide}>
                <p>|| Portfolio</p>
            </div>

            <div className={classes.navbarRightSide}>
                <Link href='/' className={path==='/' ? `${classes.link} ${classes.active}` : classes.link}><div>Home</div></Link>
                <Link href='/pokeapi' className={path==='/pokeapi' ? `${classes.link} ${classes.active}` : classes.link}><div>PokeAPI</div></Link>
                <Link href='/experience' className={path==='/experience' ? `${classes.link} ${classes.active}` : classes.link}><div>Experience</div></Link>
                <Link href='/projects' className={path==='/projects' ? `${classes.link} ${classes.active}` : classes.link}><div>Projects</div></Link>
            </div>
        </div>
        <div className={classes.burger}>
            <MenuIcon fontSize='large'/>
        </div>
        </>
        
        
        
    );
}