import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import homeImg from '../../../public/header/casa.png'
import formImg from '../../../public/header/correo.png'
import favImg from '../../../public/header/corazon.png'
import { useEffect } from 'react'

const Header = () => {

    return(

        <header className={styles.header}>

            <section className={styles.flex}>

                <img></img>

            </section>

            <nav className={styles.navBar}>

                <img src={homeImg} className={styles.navImg}></img>

                <Link to="/">Inicio</Link>

                <img src={formImg} className={styles.navImg}></img>

                <Link to="/contacto">Contacto</Link>

                <img src={favImg} className={styles.navImg}></img>

                <Link to="/favoritos">Favoritos</Link>

            </nav>

            <section className={styles.flex}>

                <button>Tema</button>

            </section>


        </header>

    )

}

export default Header