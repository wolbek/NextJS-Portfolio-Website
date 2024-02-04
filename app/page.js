import classes from './page.module.css';
import Link from 'next/link';
import selfPhoto from '@/public/selfPhoto.png';
import Image from 'next/image';
import Button from '@/components/button';
import Card from '@/components/aboutCard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';

export default function Home() {
  return (
    <>
      <header className={classes.header}>

        <div className={classes.headerLeftPanel}>

          <div>
            <h3>Hello!</h3>
            <h1>I'm Aakash Vishwakarma</h1>
            <p>I have an experience in backend as well as in frontend. I have made several projects.</p>
          </div>

          <div>
            <Link href='#aboutme'><Button text="About Me"/></Link>
            <Link href='https://drive.google.com/file/d/194WG_njeu3v82Tk9jVlhvxbTfRA35xCJ/view?usp=sharing'><Button text="Download Resume"/></Link>
          </div>

        </div>

        <div className={classes.headerRightPanel}>
          <Image src={selfPhoto} />
        </div>

      </header>

      <main>
        
        <div className={classes['about-div']} id="aboutme">
          <h1>About Me!</h1>
          <p>Driven, accomplished engineering graduate with a passion for continuous learning and staying ahead of the technological curve. Equipped with exceptional determination, unwavering sincerity, and laser-like focus, I have successfully completed my engineering degree with outstanding academic scores. Seeking exciting opportunities to apply my knowledge and skills in a dynamic environment. Let's shape the future together!
Looking for various opportunities!</p>
          <div className={classes['about-card-collection']}>
            
            <Card heading="Experience" content="1+ Internships" icon={<WorkspacePremiumIcon fontSize='large' color='primary'/>}/>
            <Card heading="Projects" content="4+ Projects" icon={<FolderSpecialIcon fontSize='large' color='primary'/>}/>
            <Card heading="Certifications" content="4+ Certifications" icon={<PeopleAltIcon fontSize='large' color='primary'/>}/>
          </div>
          
        </div>
      </main>
      
    </>
  );
}
