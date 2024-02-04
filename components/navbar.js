import classes from './navbar.module.css';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar(){
    return (
        <>
        <div className={classes.navbar}>
            <div className={classes.navbarLeftSide}>
                
                <Link href='/' className={classes.link}><p>|| Portfolio</p></Link>
            </div>

            <div className={classes.navbarRightSide}>
                <Link href='/api' className={classes.link}><div>API</div></Link>
                <Link href='/experience' className={classes.link}><div>Experience</div></Link>
                <Link href='/projects' className={classes.link}><div>Projects</div></Link>
            </div>
        </div>
        <div className={classes.burger}>
            <MenuIcon fontSize='large'/>
        </div>
        </>
        
        
        
    );
}