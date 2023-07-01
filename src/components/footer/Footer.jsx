import styles from './Footer.module.css'
import wpIcon from '../../../public/footer/wp.png'
import igIcon from '../../../public/footer/ig.png'
import webIcon from '../../../public/footer/web.png'

const Footer = () => {

    return(

        <>
        
            <footer className={styles.footer}>

                <section className={styles.info}>

                    <p className={styles.autor}>Desarrollado por MSSI</p>

                </section>

                <section className={styles.redes}>

                    <a><img src={wpIcon} className={styles.footerImg}></img></a>

                    <a><img src={igIcon} className={styles.footerImg}></img></a>

                    <a><img src={webIcon} className={styles.footerImg}></img></a>

                </section>

            </footer>
        
        </>

    )    

}

export default Footer;