import './style.css'
import GitHub from '../../assets/github-icon.png'
import Linkedin from '../../assets/linkedin-icon.png'
import Whatsapp from '../../assets/whatsapp-icon.png'

const Footer = () => {
    return (
        <footer>
            <a name="footer"></a>
            <div className='conteiner_footer'>
                <div className='conteiner_info-footer'>
                    <h3 className='title_footer'>Contato</h3>
                    <p className='direitos_footer'>Todos os direitos reservados - José da Silva</p>
                </div>
                <div className='img_conteiner_footer'>
                    <a href="https://github.com/amarosilvasouza1">
                        <img src={GitHub} alt="" className="img_footer" />
                    </a>
                    <a href="https://www.linkedin.com/in/amaro-silva-200614278/">
                        <img src={Linkedin} alt="" className="img_footer" />
                    </a>
                    <a href="">
                        <img src={Whatsapp} alt="" className="img_footer" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer