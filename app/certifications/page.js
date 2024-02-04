import classes from './page.module.css';
import Certification from "@/components/mainCard";

export default function CertificationPage(){
    const certifications = [
        {
            title: "Coursera: Python Specialization",
        },
        {
            title: "Coursera: Google IT Support Specialization",
          
        },
        {
            title: "Alpha: DSA with Java",
          
        },
        {
            title: "Microsoft Excel",
         
        }
    ]
    // console.log(experience[0]);
    return (
        <div className={classes.certificationDiv}>
            <h1>Certifications</h1>
            <div className={classes['certification-collection']}>
                <Certification details={certifications[0]}/>
                <Certification details={certifications[1]}/>
                <Certification details={certifications[2]}/>
                <Certification details={certifications[3]}/>
            </div>
        </div>
    );
}