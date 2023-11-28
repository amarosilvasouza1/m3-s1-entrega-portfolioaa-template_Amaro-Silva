import './style.css'
import GitHub from '../../../assets/git-icon.png'
import { projects } from '../../../data/projects'

const SectionProjects = () => {

    return (
        <section className='section_conteiner'>
            <a name="projects"></a>
            <div className='projects_conteiner'>
                <div>
                    <h2 className='title_projects'>Projetos</h2>
                </div>
                <div>
                    <ul className='card_conteiner_projects'>
                        {projects.map ((el) => (
                            <li className='card_project'>
                            <div className='info_card'>
                                <h3 className='title_card'> {el.name} </h3>
                                <img className='icon_card' src={GitHub} alt=" github-icon" />
                            </div>
                            <p className='Project_description'> {el.description} </p>
                            <a className='links_project' href= {el.link} >Saiba mais</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionProjects