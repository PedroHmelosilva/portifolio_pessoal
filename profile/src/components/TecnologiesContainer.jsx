import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMsqlServer,
    DiReact,
} from 'react-icons/di';

import '../styles/components/tecnologiescontainer.sass';

const technologies = [
    { Id: "html", name: "HTML5", icon: <DiHtml5 />},

    { Id: "css", name: "CSS", icon: <DiCss3 />},

    { Id: "js", name: "JS", icon: <DiJsBadge />},

    { Id: "mysqlserver", name: "SQLSERVER", icon: <DiMsqlServer />},

    { Id: "react", name: "REACT", icon: <DiReact />},
]

const TecnologiesContainer = () => {
    return <section className='tecnologies-container'>
        <h2>Tecnologias</h2>
        <div className="tecnologies-grid">
           {technologies.map((tech) => (
             <div className='technology-card' id={tech.Id} key={tech.Id}>
                {tech.icon}
                <div className='technology-info'>
                    <h3>{tech.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
             </div>
           ))} 
        </div>
    </section>;{ 
    }
};

export default TecnologiesContainer;