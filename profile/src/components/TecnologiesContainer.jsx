import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMsqlServer,
    DiReact,
} from 'react-icons/di';

import '../styles/components/tecnologiescontainer.sass';

const technologies = [
    { Id: "html", name: "HTML5", text: "Foi com essa linguagem de marcação que eu tive o meu primeiro contato com o mundo da programação.", icon: <DiHtml5 />},

    { Id: "css", name: "CSS3", text: "Foi a linguagem que eu mais gostei no começo dos meus estudos na programação.", icon: <DiCss3 />},

    { Id: "js", name: "JavaScript", text: "Estou indo bem no JS, é uma linguagem muito interessante e aprendi muito com ela.", icon: <DiJsBadge />},

    { Id: "mysqlserver", name: "SQLServer", text: "Foi difícil aprender mais consegui, e hoje estou muito bom no SqlServer.", icon: <DiMsqlServer />},

    { Id: "react", name: "REACT", text: "Estou muito no início mais é uma linguegem que vale a pena estudar e aprender.", icon: <DiReact />},
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
                    <p>{tech.text}</p>
                </div>
             </div>
           ))} 
        </div>
        <br />
    </section>;{ 
    }
};

export default TecnologiesContainer;