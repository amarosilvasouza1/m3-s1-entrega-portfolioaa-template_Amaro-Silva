import htmlIcon from "../../../assets/html-icon.png";
import cssIcon from "../../../assets/css-icon.png";
import jsIcon from "../../../assets/js-icon.png";
import reactIcon from "../../../assets/react-icon.png";
import './style.css'
import { technologies } from '../../../data/technologies.js'

const SectoinTechnology = () => {

    return (
        <section className='section_conteiner'>
            <div className='technology_conteiner'>
                <div className='conteiner_title'>
                    <h2 className='title_technology'>Tecnologias</h2>
                </div>
                <ul className='card_technologys_conteiner'>
                            {/* simplesmente bugou e nao rederizava nada  */}
                    {/* {technologies((el) => (
                        <li className='card_technology'>
                            <img className='img_technology' src= {el.img} alt="html icon"/>
                            <h3 className='title_card_technology'>HTML</h3>
                        </li>
                    ))} */}

                    <li className='card_technology'>
                        <img className='img_technology' src={htmlIcon} alt="html icon" />
                        <h3 className='title_card_technology'>HTML</h3>
                    </li>
                    <li className='card_technology'>
                        <img className='img_technology' src={cssIcon} alt="css icon" />
                        <h3 className='title_card_technology'>CSS</h3>
                    </li>
                    <li className='card_technology'>
                        <img className='img_technology' src={jsIcon} alt="js icon" />
                        <h3 className='title_card_technology'>Javascript</h3>
                    </li>
                    <li className='card_technology'>
                        <img className='img_technology' src={reactIcon} alt="react icon" />
                        <h3 className='title_card_technology'>React</h3>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SectoinTechnology