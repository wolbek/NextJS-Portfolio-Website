import classes from './social-bar.module.css';
import instagramLogo from '@/public/instagram.png';
import linkedinLogo from '@/public/linkedin.png';
import youtubeLogo from '@/public/youtube.png';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialBar(){
    return (
        <div className={classes["social-bar"]}>
            <Link href='https://www.instagram.com/aakashvish22/'><Image src={instagramLogo}/></Link>
            <Link href='https://www.linkedin.com/in/aakashvish22'><Image src={linkedinLogo}/></Link>
            <Link href='https://www.youtube.com/@aakashvishwakarma2165'><Image src={youtubeLogo}/></Link>
        </div>
    )
};