import classes from './page.module.css';
import Project from "@/components/mainCard";

export default function ProjectPage(){
    const projects = [
        {
            title: "Credit risk analysis using Machine Learning",
            description: "Developed a website enabling credit score checks using ML-driven Probability of Default model, and allowing bankers to estimate loan risks through loss given default, exposure at default, and expected loss predictions.",
            technologies: "Python, Flask, Machine Learning, APIs, HTML, CSS, JavaScript, jQuery, PlotlyJS."
        },
        {
            title: "E-Commerce Store for Clothes",
            description: "Developed an API-integrated B2C e-commerce website allowing users to search and purchase clothes or register as a seller on-site to sell clothes using the seller dashboard providing analytics of sales.",
            technologies: "Python, Django, REST APIs, PostgreSQL, HTML, CSS, JavaScript, jQuery, ChartJS, Razorpay API."
        },
        {
            title: "Stock Portfolio Risk Assessment",
            description: "Built a website to assess user portfolio’s risks to provide an optimized combination of stock weights. Assessment results get visualized on charts with forecast prices for 2 years. Wrote a web scraper engine allowing a user to search in-depth about any NSE stock.",
            technologies: " Flask, Selenium, PlotlyJS, FBProphet, yFinance API."
        },
        {
            title: "Scientific Calculator",
            description: "Developed an application that performs basic arithmetic operations as well as exponentiation, log, factorial, nth root operation, switch between degrees and radian mode, integration, differentiation, complex trigonometry, and fixpoint arithmetic. There is no upper limit on the number of digits to be handled.",
            technologies: "Java, OOPS, Swing, AWT."
        }
    ]
    
    return (
        <div className={classes.projectDiv}>
            <h1>Projects</h1>
            <div className={classes['project-collection']}>
                <Project details={projects[0]}/>
                <Project details={projects[1]}/>
                <Project details={projects[2]}/>
                <Project details={projects[3]}/>
            </div>
        </div>
    );
}