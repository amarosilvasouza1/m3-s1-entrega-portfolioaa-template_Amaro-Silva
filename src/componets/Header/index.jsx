import './style.css'
import Portfolio from '../../assets/portfolio.png'


const Header = () => {

    return (
        <header>
            <div className='Header_conteiner'>
                <img src={Portfolio} alt="" />
                <nav className='Nav_bar'>
                    <p className='link_Header'>
                        <a href="#abaut">Sobre</a>
                    </p>

                    <p className='link_Header'>
                        <a href="#technology">Stack</a>
                    </p>

                    <p className='link_Header'>
                        <a href="#projects">Projetos</a>
                    </p>
                </nav>
                <a href="#footer"><button className='btn'>Contato</button></a>
            </div>
        </header>
    )

}

export default Header