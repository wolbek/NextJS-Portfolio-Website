import classes from './page.module.css';
import Experience from "@/components/mainCard";

export default function ExperiencePage(){
    const experience = [
        {
            title: "Maharashtra Police Academy, Nashik",
            position: "Full Stack Developer",
            duration: "Feb '22 - Jul '22",
            description: "Built a website for Maharashtra Police Academy, Nashik for tracking police course training.",
            technologies: "Python, Flask, WTForms, HTML, CSS, Material Dashboard, JavaScript, jQuery, ChartJS, MySQL, Database Designing, Website Designing, APIs, CRUD."
        },
        {
            title: "FRT internship program",
            position: "Cloud Trainee Intern",
            duration: "Oct '21 - Dec '21",
            description: "Created a dynamic stock analysis website and hosted on Azure with App Service, Active Directory, and Monitor integration.",
            technologies: "yfinance API, AJAX, Chart.js and Mircosoft Azure."
        }
    ]
    // console.log(experience[0]);
    return (
        <div className={classes.experienceDiv}>
            <h1>Experience</h1>
            <div className={classes['experience-collection']}>
                <Experience details={experience[0]}/>
                <Experience details={experience[1]}/>
            </div>
        </div>
    );
}