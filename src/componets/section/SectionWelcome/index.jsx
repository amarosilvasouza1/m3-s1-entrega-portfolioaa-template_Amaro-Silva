import './style.css'
import BannerImg from '../../../assets/banner-img.png'

const SectionWelcome = () => {

    return (
        <section className='welcome_conteiner'>
            <a name="abaut"></a>
            <div className='welcome'>
                <div className='Welcome_info'>
                    <span>AMARO SILVA</span>
                    <h1 className='title_welcome'>Bem vindo ao meu portfólio</h1>
                    <p className='paragaphro_welcome'>Sou bem determinado em tudo oque eu faço</p>
                    <button className='btn'>Saiba mais</button>
                </div>
                <div>
                    <img className='welcome-img' src={BannerImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SectionWelcome